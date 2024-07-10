import { Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Snackbar)(({ theme }) => ({
  div: {
    color: theme.palette.common?.white,
    display: "flex",
    alignItems: "center",
  },
}));
