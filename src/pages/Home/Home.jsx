import { Helmet } from "react-helmet-async"
import Bannar from "../../components/Bannar"
import Category from "../../components/Category"
import BistroBoss from "../homeComponent/BistroBoss"
import Featured from "../homeComponent/Featured"
import PopulerMenu from "../homeComponent/PopulerMenu"
import Testimonials from "../homeComponent/Testimonials"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
        <meta name="description" content="Home page of Bistro Boss Restaurant" />
      </Helmet>
      <Bannar />
      <Category />
      <BistroBoss />
      <PopulerMenu />
      <Featured />
      <Testimonials />
    </div>
  )
}

export default Home