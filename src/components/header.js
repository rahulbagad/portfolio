import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { useColorMode, Flex } from "theme-ui";
import Moon from "../images/moon.png";
import Sun from "../images/sun.png";

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode();

  const nextColorMode = colorMode === "light" ? "dark" : "light";
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
          <img
            src={colorMode === "dark" ? Moon : Sun}
            style={{ width: 30, height: 30, float: "right" }}
            onClick={(e) => {
              setColorMode(nextColorMode);
            }}
          />
        </h1>
      </div>
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
