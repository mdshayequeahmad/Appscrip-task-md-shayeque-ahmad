import { useProducts } from '../hooks/useProducts'
import { useFavorites } from '../hooks/useFavorites'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/sections/HeroSection'
import ProductGrid from '../components/product/ProductGrid'
import ProductFilters from '../components/product/ProductFilters'

export default function Home() {
  const { products, loading } = useProducts()
  const { favorites, toggleFavorite } = useFavorites()

  return (
    <Layout>
      <HeroSection />
      
      <div className="content-wrapper">
        <ProductFilters />
        
        <div className="products-section">
          <div className="products-header">
            <div className="recommended-section">
              <h3>RECOMMENDED</h3>
              <select className="sort-select">
                <option>NEWEST FIRST</option>
                <option>POPULAR</option>
                <option>PRICE: HIGH TO LOW</option>
                <option>PRICE: LOW TO HIGH</option>
              </select>
            </div>
          </div>
          
          {loading ? (
            <div className="loading">Loading products...</div>
          ) : (
            <ProductGrid 
              products={products} 
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}