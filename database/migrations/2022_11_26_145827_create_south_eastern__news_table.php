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
        Schema::create('south_eastern_news', function (Blueprint $table) {
            $table->id();
            $table->string('headline');
            $table->string('image');
            $table->string('story');
            $table->unsignedBigInteger('posted_by')->index();
            $table->foreign('posted_by')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
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
        Schema::dropIfExists('south_eastern__news');
    }
};
