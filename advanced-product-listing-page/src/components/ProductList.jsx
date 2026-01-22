import { useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import Sort from "./Sort";

const ProductList = ({ products }) => {
  // 1️⃣ State lives in parent
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  // 2️⃣ Get unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  // 3️⃣ FILTER LOGIC
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // 4️⃣ SORT LOGIC (always AFTER filtering)
  let sortedProducts = [...filteredProducts];

  if (sortOrder === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // 5️⃣ RENDER
  return (
    <div className="p-6">
      {/* Filters + Sort Controls */}
      <div className="flex gap-6 mb-6">
        <Filters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        <Sort sortOrder={sortOrder} onSortChange={setSortOrder} />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
