<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name' => 'Ziad',
            'last_name' => 'Dghaish',
            'email' => 'ziad@gmail.com',
            'username' => 'ziadDghaish',
            'phone' => '+96171400433',
            'role' => 'admin',
            'district' => 'Beqaa',
            'city' => 'Al-Rafid',
            'password' => Hash::make('password'),
        ]);
    }
}
