import { Alert, AlertColor } from "@mui/material";
import { Container } from "./styles";
import Icon from "../icon";
import { useSnackbarDispatch } from "@/contexts/snackbarContext";
import theme from "@/styles/theme";
import { CloseIcon } from "public/icons";

interface ISnackbar {
  showSnackbar: boolean;
  type: string;
  message: string;
}

const SnackbarAlert = ({ message, showSnackbar, type }: ISnackbar) => {
  const { closeSnackbar } = useSnackbarDispatch();

  const action = (
    <Icon
      SVGComponent={CloseIcon}
      onClick={closeSnackbar}
      color={theme.palette.common?.white}
      width={24}
      height={24}
    />
  );

  return (
    <Container
      open={showSnackbar}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert action={action} variant="filled" severity={type as AlertColor}>
        {message}
      </Alert>
    </Container>
  );
};

export default SnackbarAlert;
