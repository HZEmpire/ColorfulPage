/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        &copy; 2024 Haozhou Xu, Template {" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        from <Link to="/">Stackrole.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer
