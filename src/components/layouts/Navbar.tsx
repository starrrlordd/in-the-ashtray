import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import classes from "../../styles/Navbar.module.css";

import {
  faBars,
  faMagnifyingGlass,
  faAngleLeft,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavlinkType = {
  label: string;
  path: string;
};

type NavbarProps = {
  links: NavlinkType[];
};

const Navbar = ({ links }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const homepageHandler = () => {
    const navigate = useNavigate();

    navigate("/");
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);

    console.log(showSearch);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navAlign}>
        <button className={classes.navButton} onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faXmark : showSearch ? faAngleLeft : faBars}
          />
        </button>

        <div className={classes.logo}>
          <NavLink to={"/"} onClick={homepageHandler}>
            ITA
          </NavLink>
        </div>
        <div>
          <button className={classes.navButton} onClick={toggleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-bars" />
          </button>
          {showSearch && (
            <div className={classes.searchBar}>
              <div className={classes.searchItems}>
                <button
                  className={classes.searchBackwards}
                  onClick={toggleSearch}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <input
                  type="text"
                  placeholder="Search keyword"
                  className={classes.searchInput}
                />
                <div className={classes.searchReturn}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={classes.searchReturnIcon}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <ul className={`${classes.navlinks} ${isOpen ? classes.open : ""}`}>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
