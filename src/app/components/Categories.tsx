"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";

interface Category {
  _id: string;
  title: string;
  image: string;
  products: number;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch categories from Sanity
    client
      .fetch(
        `*[_type == "categories"]{
          _id,
          title,
          "image": image.asset->url,
          products
        }`
      )
      .then((data) => setCategories(data))
      .catch((error) =>
        console.error("Error fetching categories from Sanity:", error)
      );
  }, []);

  return (
    <section className="w-full px-4 py-[7rem] md:px-6 bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-8 text-center">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/categories/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px]">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                  layout="fill"
                />
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/90 transition-colors duration-300">
                <div className="absolute bottom-0 p-6">
                  {/* Category Name */}
                  <h3 className="mb-2 text-xl md:text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  {/* Product Count */}
                  <p className="text-sm md:text-base text-gray-200">
                    {category.products} Products
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
