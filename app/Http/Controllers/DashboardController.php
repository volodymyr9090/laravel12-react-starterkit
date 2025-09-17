<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
// use App\Models\Backup;
use App\Models\ActivityLog;

class DashboardController extends Controller
{
    public function index()
    {
        $usersCount = User::count();
        // $backupsCount = Backup::count();
        $activityLogsCount = ActivityLog::count();

        $summaryData = [
            ['label' => 'Users', 'value' => $usersCount, 'color' => '#4ade80'],
            // ['label' => 'Backups', 'value' => $backupsCount, 'color' => '#f472b6'],
            ['label' => 'Activity Logs', 'value' => $activityLogsCount, 'color' => '#38bdf8'],
        ];
        return Inertia::render('dashboard', [
            'summaryData' => $summaryData,
        ]);
    }

    public function mypage()
    {
        return Inertia::render('mypage');
    }
}
