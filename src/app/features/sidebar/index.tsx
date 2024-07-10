"use client";

import Icon from "@/components/icon";
import React, { useState } from "react";
import {
  HeaderDividerWrapper,
  Header,
  SidebarWrapper,
  Content,
  StyledMenuItem,
  Footer,
  StyledDivider,
  ItemText,
  ContentWrapper,
} from "./styles";
import { useTranslations } from "next-intl";
import packageJson from "../../../../package.json";
import { Typography } from "@mui/material";
import { RecallIcon, CalendarIcon, LogoutIcon } from "public/icons";

const SideBar: React.FC = () => {
  const t = useTranslations("components.sidebar");
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarWrapper data-is-open={isOpen}>
      <Header>
        <Typography>v{packageJson.version}</Typography>

        <HeaderDividerWrapper>
          <StyledDivider data-is-open={isOpen} />
          <Icon
            width={28}
            height={28}
            SVGComponent={RecallIcon}
            onClick={toggleDrawer}
            customStyles={{
              cursor: "pointer",
              marginRight: isOpen ? 8 : 0,
            }}
            tooltip={isOpen ? t("collapse.close") : t("collapse.open")}
          />
        </HeaderDividerWrapper>
      </Header>
      <Content data-is-open={isOpen}>
        <ContentWrapper>
          <StyledMenuItem selected={true} data-is-open={isOpen}>
            <Icon
              width={24}
              height={24}
              SVGComponent={CalendarIcon}
              tooltip={t("options.hourControl.tooltip")}
              color={"#0DB5B5"}
            />
            {isOpen && (
              <ItemText highlight={true}>
                {t("options.hourControl.text")}
              </ItemText>
            )}
          </StyledMenuItem>
        </ContentWrapper>
      </Content>
      <Footer data-is-open={isOpen}>
        <StyledMenuItem data-is-open={isOpen} onClick={() => {}}>
          <Icon
            width={24}
            height={24}
            SVGComponent={LogoutIcon}
            tooltip={"Fazer logout"}
          />
          {isOpen && <ItemText>{"Logout"}</ItemText>}
        </StyledMenuItem>
      </Footer>
    </SidebarWrapper>
  );
};

export default SideBar;
