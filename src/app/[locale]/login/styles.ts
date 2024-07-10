import { styled } from "@mui/material/styles";

export const Container = styled("div")(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const InfoWrapper = styled("div")(({ theme }) => ({
  width: "50%",
  height: "100%",
  display: "flex",
  backgroundColor: theme.palette?.primary?.main,
}));
