
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-8 py-20 md:grid-cols-2">

        <div>
          <p className="font-semibold tracking-widest text-blue-600">
            WELCOME TO FASHION STORE
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Discover Your
            <span className="text-blue-600"> Favorite </span>
            Products
          </h1>

          <p className="mt-5 max-w-lg leading-relaxed text-gray-600">
            Temukan berbagai produk pilihan dengan desain modern,
            kualitas terbaik, dan harga yang menarik.
            Lengkapi kebutuhanmu bersama Fashion Store.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Shop Now →
          </Link>
        </div>

        {/* Electronics Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000"
            alt="Electronics Products"
            className="h-80 w-full rounded-2xl object-cover shadow-lg md:h-96"
          />
        </div>

      </section>

    </div>
  );
};

export default Home;
