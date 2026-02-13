import { useEffect, useState } from "react";
import { api } from "../api/api";
import { CardList } from "../Components/UI/CardList";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await api.get("/products/category/smartphones?limit=20");
        if (res.status === 200) {
          setProducts(res.data.products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoader(false);
      }
    };

    getProductData();
  }, []);

  return (
    <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-blue-400 text-center">
          Featured Products
        </h2>

        {loader ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <CardList key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 mt-10">No products found.</p>
        )}
      </div>
    </div>
  );
}
