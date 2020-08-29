import PropTypes from "prop-types";
import React from "react";
import { useColorMode, NavLink, Divider } from "theme-ui";
import Profiles from "./profiles";
import { FiMoon, FiSun } from "react-icons/fi";
import Button from "./button";

const Header = () => {
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <span style={{ fontSize: 30, fontWeight: 650 }}>Rahul Bagad</span>
        <span>
          <Button
            title="toogle-switch"
            as="a"
            style={{ float: "right", marginTop: 28 }}
            circular
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              setColorMode(nextColorMode);
            }}
          >
            {colorMode === "dark" ? <FiMoon /> : <FiSun />}
          </Button>
        </span>
      </div>
      <Profiles />
      <div style={{ display: "flex", alignItems: "center", padding: 5 }}>
        <NavLink
          target="_blank"
          href="https://drive.google.com/file/d/1Qoy8UctPE_MmwPyzdSiz6H4cUbAneiFo/view?usp=sharing"
          p={2}
        >
          Resume
        </NavLink>
        <NavLink href="#!" p={2}>
          Projects
        </NavLink>
        <NavLink href="#!" p={2}>
          Blog
        </NavLink>
      </div>
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
