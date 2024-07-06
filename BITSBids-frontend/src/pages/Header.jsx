import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/LOGO.png";

const Header = () => {
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  if(admin!= null)
  {
    return (
        <div>
          <nav class="navbar  navbar-expand-lg custom-bg text-color">
            <div class="container-fluid text-color">

              <Link to="/" className="navbar-brand">
                <i>
                  <b className="text-color">BITSBids</b>
                </i>
              </Link>

              <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/about" class="nav-link active" aria-current="page">
                      <b className="text-color">About Us</b>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/contact" class="nav-link active" aria-current="page">
                      <b className="text-color">Contact Us</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                        to="/admin/category/all"
                        class="nav-link active"
                        aria-current="page"
                    >
                      <b className="text-color"> View Categories</b>
                    </Link>
                  </li>
                </ul>
                <Link to="/" class="nav-link active" aria-current="page">
                  <img
                      src={logo}
                      width="70"
                      height="auto"
                      className="d-inline-block align-top logo img-responsive "
                      alt="logo"
                  />
                </Link>

                <RoleNav />
              </div>
            </div>
          </nav>
        </div>
    );

  }
  else
  {
    return (
        <div>
          <nav class="navbar  navbar-expand-lg custom-bg text-color">
            <div class="container-fluid text-color">

              <Link to="/" className="navbar-brand">
                <i>
                  <b className="text-color">BITSBids</b>
                </i>
              </Link>

              <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/about" class="nav-link active" aria-current="page">
                      <b className="text-color">About Us</b>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/contact" class="nav-link active" aria-current="page">
                      <b className="text-color">Contact Us</b>
                    </Link>
                  </li>
                </ul>
                <Link to="/" class="nav-link active" aria-current="page">
                  <img
                      src={logo}
                      width="70"
                      height="auto"
                      className="d-inline-block align-top logo img-responsive "
                      alt="logo"
                  />
                </Link>

                <RoleNav />
              </div>
            </div>
          </nav>
        </div>
    );
  }

};

export default Header;