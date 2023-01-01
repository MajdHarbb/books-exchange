<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Book;
use App\Models\Notification;

class NotificationController extends Controller
{
    public function getUserNotifications(Request $request) {
        try {
            $notifications = Notification::where('seller_id', '=', $request->user_id)
            ->orWhere('buyer_id', '=', $request->user_id)
            ->get();
            return response()->json([
                'status' => true,
                'notifications' => $notifications
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
        
    }
}
