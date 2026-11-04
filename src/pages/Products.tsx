import { Link } from "react-router-dom";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-10 text-gray-900">
      <h1 className="mb-2 text-3xl font-bold">
        Our Products
      </h1>

      <p className="mb-8 text-gray-600">
        Pilih produk yang kamu inginkan.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-52 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-sm text-gray-500">
                {product.category}
              </p>

              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {product.name}
              </h2>

              <p className="mt-2 font-semibold text-blue-600">
                Rp {product.price.toLocaleString("id-ID")}
              </p>

              <Link
                to={`/products/${product.id}`}
                className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;