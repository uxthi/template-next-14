import { CssBaseline, GlobalStyles as MuiGlobalStyles } from "@mui/material";

const styles = {
  a: {
    textDecoration: "none",
  },
  body: {
    overflowY: "hidden",
  },
  ul: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  html: {
    "*": {
      scrollbarWidth: "thin",
      scrollbarColor: `#0DB5B5 transparent`,
    },
  },
};

export const GlobalStyles = () => (
  <>
    <CssBaseline />
    <MuiGlobalStyles styles={styles} />
  </>
);
