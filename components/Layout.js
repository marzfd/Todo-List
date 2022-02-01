import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <main className="flex-auto bg-gradient-to-br from-orange-50 to-orange-300">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout