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
        $menus = Menu::with('children')->whereNull('parent_id')->orderBy('order')->get();
        return Inertia::render('menus/Index', ['menus' => $menus]);
    }

    public function create()
    {
        $roles = Role::pluck('name');
        $menus = Menu::whereNull('parent_id')->orderBy('title')->get();

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

        // Pastikan roles selalu array
        $data['roles'] = $data['roles'] ?? [];

        Menu::create($data);

        return redirect()->route('menus.index')->with('success', 'Menu berhasil ditambahkan.');
    }

    public function edit(Menu $menu)
    {
        $roles = Role::pluck('name');
        $menus = Menu::whereNull('parent_id')->where('id', '!=', $menu->id)->orderBy('title')->get();

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
            'parent_id' => 'nullable|exists:menus,id',
            'order' => 'nullable|integer',
            'roles' => 'nullable|array',
        ]);

        $data['roles'] = $data['roles'] ?? [];

        $menu->update($data);

        return redirect()->route('menus.index')->with('success', 'Menu berhasil diperbarui.');
    }

    public function destroy(Menu $menu)
    {
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
