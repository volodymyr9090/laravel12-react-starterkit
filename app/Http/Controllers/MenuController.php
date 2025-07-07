<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::with('children.children') // 👈 nested 2 level
            ->whereNull('parent_id')
            ->orderBy('order')
            ->get();

        return Inertia::render('menus/Index', [
            'menus' => $menus,
        ]);
    }


    public function create()
    {
        $roles = Role::pluck('name');

        $menus = Menu::orderBy('title')->get(); // ambil semua menu, bukan hanya parent, untuk support 2+ level submenu

        return Inertia::render('menus/Form', [
            'roles' => $roles,
            'parentMenus' => $menus,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'icon' => 'nullable|string',
            'route' => 'nullable|string',
            'parent_id' => 'nullable|exists:menus,id',
            'order' => 'nullable|integer',
            'roles' => 'nullable|array',
        ]);

        $data['roles'] = $data['roles'] ?? [];

        // Default order jika tidak diisi
        if (!isset($data['order'])) {
            $data['order'] = Menu::where('parent_id', $data['parent_id'] ?? null)->max('order') + 1;
        }

        Menu::create($data);

        return redirect()->route('menus.index')->with('success', 'Menu berhasil ditambahkan.');
    }

    public function edit(Menu $menu)
    {
        $roles = Role::pluck('name');

        // Hindari memilih dirinya sendiri sebagai parent
        $menus = Menu::where('id', '!=', $menu->id)
            ->orderBy('title')
            ->get();

        return Inertia::render('menus/Form', [
            'menu' => $menu,
            'roles' => $roles,
            'parentMenus' => $menus,
        ]);
    }

    public function update(Request $request, Menu $menu)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'icon' => 'nullable|string',
            'route' => 'nullable|string',
            'parent_id' => 'nullable|exists:menus,id|not_in:' . $menu->id, // tidak bisa menjadi anak dirinya sendiri
            'order' => 'nullable|integer',
            'roles' => 'nullable|array',
        ]);

        $data['roles'] = $data['roles'] ?? [];

        if (!isset($data['order'])) {
            $data['order'] = Menu::where('parent_id', $data['parent_id'] ?? null)->max('order') + 1;
        }

        $menu->update($data);

        return redirect()->route('menus.index')->with('success', 'Menu berhasil diperbarui.');
    }

    public function destroy(Menu $menu)
    {
        // ❗ Jika ada anak menu, hapus juga (opsional)
        $menu->children()->delete();

        $menu->delete();
        return redirect()->route('menus.index')->with('success', 'Menu berhasil dihapus.');
    }

    public function reorder(Request $request)
    {
        $menus = $request->input('menus');

        foreach ($menus as $index => $menuId) {
            Menu::where('id', $menuId)->update([
                'order' => $index + 1,
            ]);
        }

        return redirect()->back()->with('success', 'Urutan menu berhasil disimpan.');
    }
}
