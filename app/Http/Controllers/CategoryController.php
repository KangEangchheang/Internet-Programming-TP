<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategories(){
        return Category::all();
    }
    public function createCategories(){
        $category = new Category;
        $category->name = $request->name;
        $category->save();
        return "create";
    }
    public function getCategory($categoryId){
        return Category::find($categoryId);
    }
    public function updateCategory($categoryId){
        $product = Product::find($categoryId);
        $product->name = 'Pen';
        $product->save();
    }
    public function deleteCategory($categoryId){
        $cat = Category::find($categoryId);
        $cat->delete();
        return "deleted";
    }
}
