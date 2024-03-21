import { StellaMusicLogo } from "@/shared/ui/icons";
import { LogoWrapper, Nav } from "./style";

export const NavBarLayout = () => {
  return (
    <Nav>
      <LogoWrapper>
        <StellaMusicLogo />
      </LogoWrapper>
    </Nav>
  );
};
