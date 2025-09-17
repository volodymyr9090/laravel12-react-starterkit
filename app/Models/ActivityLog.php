<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    protected $table = 'activity_log';

    /**
     * Relationships
     * Example: each log belongs to a user.
     */
    public function user()
    {
        return $this->causer();
    }
}
