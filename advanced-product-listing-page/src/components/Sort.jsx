const Sort = ({ sortOrder, onSortChange }) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">Sort By Price</label>

      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
        className="border rounded px-3 py-2 w-60"
      >
        <option value="">None</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>
    </div>
  );
};

export default Sort;
