<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Image;


class uploadImageController extends Controller
{

    public function index()
    {
        $data = Image::all();


        return view('gallery.index',compact("data"));

    }

    public function create()
    {
        return view('gallery/upload');
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|max:2048' // Validation rules for upload
        ]);

        $upload = new Image();

        $image = $request->file('image');

        // $fileName = uniqid() . '.' . $image->getClientOriginalName();
        // $fileName = uniqid() . '.' . $image->getClientOriginalExtension();

        // $path = $image->storeAs('uploads', $fileName); // Store the original im

        // (Optional) Using Intervention Image
        // $thumbnailPath = 'thumbnails/' . $fileName;
        // $intervention = Image::make($image->getRealPath());

        // $intervention->fit(200, 200, function ($constraint) {
        //     $constraint->aspectRatio();
        // })->save(storage_path('app/' . $thumbnailPath));



        // // (Alternative) Using pure Imagick
        // $imagick = new Imagick(storage_path('app/uploads/' . $fileName));
        // $imagick->resizeImage(200, 200, Imagick::FILTER_TRIANGLE, 1);
        // $imagick->writeImage(storage_path('app/thumbnails/' . $fileName));

        $image = Storage::disk('minio')->putFile('storage/', $image); // Upload a file

        $upload->path = $image;
        $upload->save();

        $data = Image::all();


        return view('gallery.index',compact("data"));
    }
}
