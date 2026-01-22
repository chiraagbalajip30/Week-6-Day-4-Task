const Filters = ({ selectedCategory, onCategoryChange, categories }) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">Filter By Category</label>

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border rounded px-3 py-2 w-60"
      >
        <option value="all">All</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
