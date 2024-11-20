import axios from "axios";
import ProductCard from "./productCard";

export type MockProduct = {
  id: number;
  title: string;
  price: string;
  rating: string;
  category: string;
  thumbnail: string;
  brand: string;
};

export default async function ProductList() {
  const currentPage = parseInt("1", 10);
  const productsPerPage = 8;
  const skip = (currentPage - 1) * productsPerPage;

  const res = await axios.get(`https://dummyjson.com/products`, {
    params: {
      limit: productsPerPage,
      skip: skip,
    },
  });
  let { products, total } = res.data;
  const totalPages = Math.ceil(total / productsPerPage);

  const nextPage = () => {
    if (currentPage * productsPerPage < totalPages) {
      //   setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* <div className="grid grid-cols-4 gap-4 "> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products &&
          products.map((user: MockProduct) => (
            <ProductCard product={user} key={user.id} />
          ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          //   onClick={() => (window.location.href = `?page=${currentPage - 1}`)}
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          //   onClick={() => (window.location.href = `?page=${currentPage + 1}`)}
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
//default server component
