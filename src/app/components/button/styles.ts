import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary?.main,
  borderRadius: "5px",
  border: "none",
  padding: "5px",
  width: "100px",
  height: "50px",
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.common?.white,
  fontSize: theme.typography.body1.fontSize,
}));
