import Nav from '@/components/Nav'

const Layout = ({ children }) => {
  return (
    <main>
      <Nav />

      {/* Content */}
      {children}

      {/* Footer */}
    </main>
  )
}

export default Layout
