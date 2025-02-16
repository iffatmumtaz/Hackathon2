
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";


type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => {



  return (
    <div key={product._id} className="group relative rounded-lg bg-white p-4">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        {product.isNew && (
          <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
            New
          </Badge>
        )}
        {product.isSale && (
          <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
            Sale
          </Badge>
        )}
        <Link href={`/product/${product._id}`}>
          <Image
            src={product.imageUrl}
            alt={product.title}
            height={400}
            width={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            aria-label={`View details of ${product.title}`}
          />
        </Link>
      </div>
      <div className="mt-4 flex flex-col items-start justify-between">
        <div>
          <h3 className="text-sm sm:text-base text-[#1C1B1F]">{product.title}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-lg sm:text-xl font-medium text-[#1C1B1F]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
        <button
          
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;