import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import { StyledHeader, StyledLogo } from "./Styles/Header.styled";

function Header() {
  const [mobileBtnActive, setMobileBtnActive] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileBtnActive(!mobileBtnActive);
    console.log(mobileBtnActive);
  };
  return (
    <StyledHeader>
      <div className="header-content">
        <StyledLogo>
          <img src="/logo.svg" alt="main-portfolio-logo" srcset="" />
        </StyledLogo>
        <NavLinks mobileBtnActive={mobileBtnActive} />
        <MobileMenu
          mobileBtnActive={mobileBtnActive}
          handleMobileMenuClick={handleMobileMenuClick}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
