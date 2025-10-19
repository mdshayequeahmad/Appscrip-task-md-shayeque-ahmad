import Header from '../common/Header'
import Footer from '../common/Footer'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout