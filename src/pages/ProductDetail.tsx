
import { Link, useParams } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 p-10 text-center">
        <h1 className="text-2xl font-bold">
          Produk Tidak Ditemukan
        </h1>

        <Link
          to="/products"
          className="mt-4 inline-block text-blue-600"
        >
          Kembali ke Produk
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <Link
          to="/products"
          className="mb-8 inline-block text-sm text-blue-600 hover:underline"
        >
          ← Kembali ke Produk
        </Link>

        <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2">

          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full rounded-xl object-cover"
          />

          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-blue-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-4 text-2xl font-bold text-blue-600">
              Rp {product.price.toLocaleString("id-ID")}
            </p>

            <div className="my-6 border-t" />

            <h2 className="font-bold text-gray-900">
              Deskripsi Produk
            </h2>

            <p className="mt-3 leading-relaxed text-gray-600">
              {product.description}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              + Tambahkan ke Keranjang
            </button>

            <Link
              to="/cart"
              className="mt-3 text-center font-medium text-gray-600 hover:text-blue-600"
            >
              Lihat Keranjang
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
