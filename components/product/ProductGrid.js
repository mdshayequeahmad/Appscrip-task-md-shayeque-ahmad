import ProductCard from './ProductCard'

const ProductGrid = ({ products, favorites, onToggleFavorite }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          isFavorite={favorites.has(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default ProductGrid