<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('seller_id')->nullable();
            $table->unsignedBigInteger('buyer_id')->nullable();
            $table->unsignedBigInteger('book_id')->nullable();
            $table->foreign('seller_id')->nullable()->references('id')->on('users')->onDelete('cascade');
            $table->foreign('buyer_id')->nullable()->references('id')->on('users')->onDelete('cascade');
            $table->foreign('book_id')->nullable()->references('id')->on('books')->onDelete('cascade');
            $table->string('type')->nullable();
            $table->string('title')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifications');
    }
};
