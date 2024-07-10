"use client";

import { Toolbar } from "@mui/material";
import {
  StyledAppBar,
  StyledContainer,
  ToolbarContainer,
  UserNameMessage,
  CurrentDateMessage,
} from "./styles";
import { useCurrentDay } from "@/hooks/useCurrentDay/useCurrentDay";

const Navbar = () => {
  const currentDate = useCurrentDay();

  return (
    <StyledAppBar color="transparent" position="static" elevation={0}>
      <StyledContainer>
        <Toolbar disableGutters>
          <ToolbarContainer>
            <UserNameMessage>Olá, usuário!</UserNameMessage>
            <CurrentDateMessage>{currentDate}</CurrentDateMessage>
          </ToolbarContainer>
        </Toolbar>
      </StyledContainer>
    </StyledAppBar>
  );
};

export default Navbar;
