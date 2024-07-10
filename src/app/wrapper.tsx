"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { ReactNode } from "react";
import { SnackbarProvider } from "./contexts/snackbarContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AxiosError, isAxiosError } from "axios";
import { UNAUTHORIZED_STATUS } from "./services/httpRequester";

type AppWrapperProps = {
  children: ReactNode;
  queryClient?: QueryClient;
};

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (_, error) => {
        if (isAxiosError(error)) {
          const reason = error as AxiosError;
          if (UNAUTHORIZED_STATUS === reason.response?.status) return false;
        }
        return true;
      },
    },
  },
});

export const AppWrapper = ({ children, queryClient }: AppWrapperProps) => {
  return (
    <QueryClientProvider client={queryClient ?? defaultQueryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <SnackbarProvider>{children}</SnackbarProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
};
