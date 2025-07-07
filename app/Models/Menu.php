<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Menu extends Model
{
    protected $fillable = [
        'title',
        'icon',
        'route',
        'parent_id',
        'order',
        'roles',
    ];

    protected $casts = [
        'roles' => 'array', // agar roles bisa diakses sebagai array
    ];

    /**
     * Relasi ke anak menu (submenu)
     */
    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id')
            ->with('children') // recursive agar nested
            ->orderBy('order');
    }
    /**
     * Relasi ke parent menu
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    /**
     * Scope: hanya menu root
     */
    public function scopeRoot($query)
    {
        return $query->whereNull('parent_id');
    }

    /**
     * Scope: menu untuk role tertentu (optional)
     */
    public function scopeForRole($query, array $roleNames)
    {
        return $query->where(function ($q) use ($roleNames) {
            $q->whereNull('roles')->orWhereJsonContains('roles', $roleNames);
        });
    }
}
