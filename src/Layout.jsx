import Navigation from "./components/navigation"
import Landing from "./components/landing"
import Footer from "./components/footer"

const Layout = () => {
  let userDetail = {
    name:'alpha',
    age:23,
    emial:'alpha@23.com'
  }

  return (
    <div>
      <Navigation />
      <Landing detail={userDetail} />
      <Footer  />
    </div>
  )
}

export default Layout
