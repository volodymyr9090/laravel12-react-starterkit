<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Menu;
use Symfony\Component\HttpFoundation\Response;

class ShareMenus
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        Inertia::share('menus', function () use ($user) {
            if (!$user || !method_exists($user, 'hasAnyRole')) {
                return [];
            }

            $menus = Menu::with(['children' => fn($q) => $q->orderBy('order')])
                ->whereNull('parent_id')
                ->orderBy('order')
                ->get();

            return $menus->filter(fn($menu) => !$menu->roles || $user->hasAnyRole($menu->roles))
                ->values()
                ->map(function ($menu) use ($user) {
                    $menu->children = $menu->children
                        ->filter(fn($child) => !$child->roles || $user->hasAnyRole($child->roles))
                        ->values();
                    return $menu;
                });
        });

        return $next($request);
    }
}
