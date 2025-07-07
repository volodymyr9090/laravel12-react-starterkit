<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        // Menu Dashboard
        Menu::create([
            'title' => 'Dashboard',
            'icon' => 'LayoutGrid',
            'route' => '/dashboard',
            'order' => 1,
            'roles' => ['admin', 'user'],
        ]);

        // Menu Roles
        Menu::create([
            'title' => 'Roles',
            'icon' => 'Users',
            'route' => '/roles',
            'order' => 2,
            'roles' => ['admin'],
        ]);

        // Menu Settings (parent)
        $settings = Menu::create([
            'title' => 'Pengaturan',
            'icon' => 'Settings',
            'route' => null,
            'order' => 3,
            'roles' => ['admin'],
        ]);

        // Submenu: Menu
        Menu::create([
            'title' => 'Menu',
            'icon' => 'List',
            'route' => '/menus',
            'parent_id' => $settings->id,
            'order' => 1,
            'roles' => ['admin'],
        ]);

        // Submenu: Aplikasi
        Menu::create([
            'title' => 'Aplikasi',
            'icon' => 'Settings2',
            'route' => '/settings',
            'parent_id' => $settings->id,
            'order' => 2,
            'roles' => ['admin'],
        ]);
    }
}
