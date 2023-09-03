<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = Product::class;

    public function definition()
    {
        return [
            'product_name' => $this->faker->word,
            'product_description' => $this->faker->sentence,
            'product_price' => $this->faker->randomFloat(2, 10, 1000),
            'product_image' => $this->faker->imageUrl(), // You can customize this based on your requirements
        ];
    }

    public function newFactory()
    {
        return new static(); // Ensure that you return an instance of the factory
    }
}

