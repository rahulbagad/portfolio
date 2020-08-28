import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { useColorMode, NavLink, Flex, Styled, Divider } from "theme-ui";
import Moon from "../images/moon.png";
import Sun from "../images/sun.png";

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode();

  const nextColorMode = colorMode === "light" ? "dark" : "light";
  return (
    <header
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <div style={{display:"flex", justifyContent:"space-between", alignItems: "center", padding: 5}}>
        <span><h1>Rahul Bagad</h1></span>
        <span><img
            src={colorMode === "dark" ? Moon : Sun}
            style={{ width: 30, height: 30, float: "right" }}
            onClick={(e) => {
              setColorMode(nextColorMode);
            }}
          />
          </span>
      </div>

      <Flex as="nav">
        <NavLink href="#!" p={2}>
          Resume
        </NavLink>
        <NavLink href="#!" p={2}>
          Projects
        </NavLink>
        <NavLink href="#!" p={2}>
          Blog
        </NavLink>
      </Flex>
      <Divider />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
