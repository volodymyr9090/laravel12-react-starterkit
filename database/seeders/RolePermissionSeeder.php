<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Buat role admin dan user jika belum ada
        $admin = Role::firstOrCreate(['name' => 'admin']);
        $user = Role::firstOrCreate(['name' => 'user']);

        // Daftar permission terstruktur berdasarkan group
        $permissions = [
            'User' => [
                'create user',
                'edit user',
                'delete user',
                'manage users',
            ],
            'Role' => [
                'create role',
                'edit role',
                'delete role',
                'manage roles',
            ],
            'Setting' => [
                'edit setting',
                'view setting',
            ],
            'Dashboard' => [
                'view dashboard',
            ],
        ];

        foreach ($permissions as $group => $items) {
            foreach ($items as $permName) {
                $permission = Permission::firstOrCreate([
                    'name' => $permName,
                    'group' => $group,
                ]);

                // Assign semua permission ke admin
                if (!$admin->hasPermissionTo($permission)) {
                    $admin->givePermissionTo($permission);
                }
            }
        }
    }
}
