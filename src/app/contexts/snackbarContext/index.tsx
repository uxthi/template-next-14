import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";

interface ISnackbarContext {
  showSnackbar: boolean;
  message: string;
  triggerSnackbar: (message: string, type: string) => void;
  type: string;
  closeSnackbar: () => void;
}

export enum SnackbarEnum {
  "ERROR" = "error",
  "SUCCESS" = "success",
  "INFO" = "info",
  "WARNING" = "warning",
}

const SnackbarContext = createContext<ISnackbarContext | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<string>("");

  const triggerSnackbar = useCallback((message: string, type: string) => {
    setShowSnackbar(true);
    setMessage(message);
    setType(type);
    setTimeout(() => {
      setShowSnackbar(false);
      setMessage("");
    }, 6000);
  }, []);

  const closeSnackbar = useCallback(() => {
    setShowSnackbar(false);
    setMessage("");
    setType("");
  }, []);

  return (
    <SnackbarContext.Provider
      value={{ showSnackbar, message, triggerSnackbar, type, closeSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbarDispatch = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error(
      "useSnackbarDispatch must be used within an SnackbarDispatchProvider"
    );
  }
  return context;
};
