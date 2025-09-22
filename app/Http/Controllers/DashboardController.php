<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ActivityLog;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        $usersCount = User::count();
        $activityLogsCount = ActivityLog::count();

        $realBackupPath = storage_path('app/private/Laravel');
        $backupFiles = File::exists($realBackupPath) ? File::files($realBackupPath) : [];

        $backupFileCounter = 0;
        foreach ($backupFiles as $file) {
            $fileName = $file->getFilename();
            if($file->getExtension() === 'zip') {
                $backupFileCounter ++;
            }
        }


        $summaryData = [
            ['label' => 'Users', 'value' => $usersCount, 'color' => '#4ade80'],
            ['label' => 'Backups', 'value' => $backupFileCounter, 'color' => '#f472b6'],
            ['label' => 'Activity Logs', 'value' => $activityLogsCount, 'color' => '#38bdf8'],
        ];


        $monthlyData = $this->getMonthlyActivity();
        $rolePercentData = $this->getRolePercentages();


        return Inertia::render('dashboard', [
            'summaryData' => $summaryData,
            'monthlyData' => $monthlyData,
            'rolePercentData' => $rolePercentData,
        ]);
    }

    public function getMonthlyActivity()
    {
        // Map months for chart labels
        $months = [
            1 => 'Jan', 2 => 'Feb', 3 => 'Mar', 4 => 'Apr',
            5 => 'May', 6 => 'Jun', 7 => 'Jul', 8 => 'Aug',
            9 => 'Sep', 10 => 'Oct', 11 => 'Nov', 12 => 'Dec'
        ];

        // Query counts for Users
        $userData = DB::table('activity_log')
            ->select(DB::raw('MONTH(created_at) as month'), DB::raw('count(*) as total'))
            ->groupBy(DB::raw('MONTH(created_at)'))
            ->pluck('total', 'month');

        // Query counts for Backups
        $backupData = DB::table('activity_log')
            ->select(DB::raw('MONTH(created_at) as month'), DB::raw('count(*) as total'))
            ->where('subject_type', 'App\\Models\\User') // 👈 adjust if different
            ->groupBy(DB::raw('MONTH(created_at)'))
            ->pluck('total', 'month');

        // Build final array
        $monthlyData = [];
        foreach ($months as $num => $name) {
            $monthlyData[] = [
                'name' => $name,
                'Users' => $userData[$num] ?? 0,
                'Backups' => $backupData[$num] ?? 0,
            ];
        }

        return $monthlyData; //response()->json($monthlyData);
    }

    public function getRolePercentages()
    {
        // Count users grouped by role
        $roleCounts = DB::table('model_has_roles')
            ->join('roles', 'model_has_roles.role_id', '=', 'roles.id')
            ->where('model_type', User::class)
            ->select('roles.name', DB::raw('COUNT(model_has_roles.model_id) as total'))
            ->groupBy('roles.name')
            ->pluck('total', 'roles.name');

        // Total users assigned to roles
        $totalUsers = $roleCounts->sum();

        // Compute percentages
        $percentages = $roleCounts->map(function ($count) use ($totalUsers) {
            return round(($count / $totalUsers) * 100, 2);
        });

        return [
            'counts' => $roleCounts,
            'percentages' => $percentages,
        ];
    }

    public function mypage()
    {
        return Inertia::render('mypage');
    }
}
