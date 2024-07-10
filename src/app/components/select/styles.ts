import { Select, MenuItem, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledMenuItem = styled(MenuItem)(() => ({
  width: "500px",
  height: "36px",
  borderRadius: "5px",
  border: "5px",
  minWidth: "500px",
}));

export const StyledSelect = styled(Select)(() => ({
  display: "flex",
  height: "36px",
  minWidth: "500px",
}));

export const Container = styled(FormControl)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
