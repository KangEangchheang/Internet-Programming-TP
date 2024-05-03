<?php

namespace App\Http\Controllers;

use Intervention\Image\Facades\Image as Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class uploadImageController extends Controller
{

    public function index()
    {
        return view('gallery/index');
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
        $image = $request->file('image');
        // $fileName = uniqid() . '.' . $image->getClientOriginalName();
        $fileName = uniqid() . '.' . $image->getClientOriginalExtension();
        $path = $image->storeAs('uploads', $fileName); // Store the original im
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

        $image = Storage::disk('minio')->putFile('', $fileName); // Upload a file
        $url = Storage::disk('minio')->url('2023-05-10.png'); // Get the public URL


        dd($url);
        // Update your Image model to store original and thumbnail paths (if ap
        return redirect('/gallery')->with('success', 'Image uploa');
    }
}
