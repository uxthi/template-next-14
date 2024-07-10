import { Box, styled, Divider, Typography, MenuItem } from "@mui/material";

interface isOpenProps {
  "data-is-open": boolean;
}

interface highlightProps {
  highlight?: boolean;
}

interface MenuItemProps extends isOpenProps {
  selected?: boolean;
}

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  transition: "width 300ms ease",
  height: "100vh",
  backgroundColor: theme.palette.background?.main,
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
}));

export const Header = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  paddingTop: "24px",
}));

export const HeaderDividerWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "10px",
}));

export const Content = styled(Box)<isOpenProps>(
  ({ ["data-is-open"]: isOpen }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: isOpen ? "flex-start" : "center",
    padding: "10px 16px",
    gap: "8px",
    justifyContent: "space-between",
    height: "100%",
  })
);

export const ContentWrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

export const StyledMenuItem = styled(MenuItem)<MenuItemProps>(
  ({ theme, selected, ["data-is-open"]: isOpen }) => ({
    display: "flex",
    justifyContent: isOpen ? "flex-start" : "center",
    alignItems: "center",
    padding: "12px",
    gap: "16px",
    width: "100%",
    background: selected ? theme.palette.common?.white : "none",
    borderRadius: selected ? "10px" : "none",
    cursor: "pointer",

    "&.Mui-selected": {
      background: theme.palette.common?.white,
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.primary?.main,
    },
  })
);

export const Footer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "14px 6px",
}));

export const StyledDivider = styled(Divider)<isOpenProps>(
  ({ ["data-is-open"]: isOpen }) => ({
    width: isOpen ? "90%" : "70%",
  })
);

export const ItemText = styled(Typography)<highlightProps>(
  ({ theme, highlight }) => ({
    fontWeight: highlight
      ? theme.typography.fontWeightBold
      : theme.typography.fontWeightRegular,
    color: theme.palette.text?.primary,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  })
);
