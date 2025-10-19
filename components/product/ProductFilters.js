const ProductFilters = () => {
  return (
    <aside className="sidebar">
      <div className="filter-section">
        <h3>3425 ITEMS</h3>
        
        <div className="filter-group">
          <h4>CUSTOMIZBLE</h4>
        </div>
        
        <div className="filter-group">
          <h4>IDEAL FOR</h4>
          <div className="filter-options">
            <label><input type="checkbox" /> All</label>
            <label><input type="checkbox" /> Men</label>
            <label><input type="checkbox" /> Women</label>
            <label><input type="checkbox" /> Baby & Kids</label>
          </div>
        </div>
        
        <div className="filter-group">
          <h4>OCCASION</h4>
          <div className="filter-options">
            <label><input type="checkbox" /> All</label>
          </div>
        </div>
        
        <div className="filter-group">
          <h4>WORK</h4>
          <div className="filter-options">
            <label><input type="checkbox" /> All</label>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default ProductFilters