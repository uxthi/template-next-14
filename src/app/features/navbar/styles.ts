import { AppBar, Box, Typography, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(() => ({}));

export const StyledContainer = styled(Box)(() => ({
  padding: "0 24px",
  maxWidth: "100%",
}));

export const ToolbarContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  padding: "20px 0",
  gap: "10px",
}));

export const UserNameMessage = styled(Typography)(({ theme }) => ({
  font: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.h4?.fontSize,
  lineHeight: "18px",
  color: "#0DB5B5",
}));

export const CurrentDateMessage = styled(Typography)(({ theme }) => ({
  font: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.body2?.fontSize,
  lineHeight: "18px",
  color: "#0DB5B5",
}));
