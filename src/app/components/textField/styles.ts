import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
}));

export const StyledTextField = styled(TextField)(() => ({
  minHeight: "36px",
  borderRadius: "5px",
  border: "5px",
  "& .MuiInputBase-root": {
    paddingLeft: 0,
  },
}));
