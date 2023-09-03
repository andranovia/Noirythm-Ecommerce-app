<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $columns = ['product_name', 'product_description', 'product_price', 'product_image'];

        $products = Product::all($columns);
        return response()->json($products);
    }
}
