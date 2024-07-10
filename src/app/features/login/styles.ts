import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette?.primary?.light,
  padding: "20px",
  gap: "50px",
}));

export const TitleWrapper = styled("div")(() => ({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const WelcomeText = styled(Typography)(({ theme }) => ({
  font: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.h3?.fontSize,
  color: theme.palette.text?.secondary,
}));

export const InputsWrapper = styled("div")(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "50%",
  gap: "20px",
}));
