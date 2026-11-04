
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-600">
            FASHION STORE / CART
          </p>

          <h1 className="text-3xl font-bold">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500">
            Periksa kembali produk pilihanmu sebelum checkout.
          </p>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="rounded-2xl border bg-white px-6 py-16 text-center shadow-sm">
            <div className="mb-4 text-6xl">🛒</div>

            <h2 className="text-xl font-bold">
              Keranjang Masih Kosong
            </h2>

            <p className="mt-2 text-gray-500">
              Yuk, temukan produk favoritmu!
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Belanja Sekarang
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Cart Products */}
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
                <h2 className="font-bold">
                  Produk Pilihan
                </h2>

                <span className="text-sm text-gray-500">
                  {totalItems} barang
                </span>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full rounded-lg object-cover sm:h-36 sm:w-36"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm text-blue-600">
                        {item.category}
                      </p>

                      <h3 className="mt-1 text-lg font-bold">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

                      {/* Quantity */}
                      <div className="flex items-center gap-3 rounded-lg border px-3 py-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="font-bold text-gray-600 hover:text-blue-600"
                        >
                          −
                        </button>

                        <span className="font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="font-bold text-gray-600 hover:text-blue-600"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Product */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-medium text-red-500 hover:text-red-700"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>

                  <div className="font-bold text-blue-600 sm:text-right">
                    Rp{" "}
                    {(item.price * item.quantity).toLocaleString("id-ID")}
                  </div>
                </div>
              ))}

              <Link
                to="/products"
                className="inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                ← Lanjut Belanja
              </Link>
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Total Produk</span>
                  <span>{totalItems} barang</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>
                    Rp {subtotal.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Pengiriman</span>
                  <span>Dihitung saat checkout</span>
                </div>
              </div>

              <div className="my-6 border-t border-dashed" />

              <div className="flex justify-between gap-2">
                <span className="font-bold">
                  Total Belanja
                </span>

                <span className="text-lg font-bold text-blue-600">
                  Rp {subtotal.toLocaleString("id-ID")}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                disabled
                className="mt-6 w-full cursor-not-allowed rounded-xl bg-blue-600 py-3 font-semibold text-white opacity-60"
              >
                Checkout
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                Fitur pembayaran belum tersedia.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
