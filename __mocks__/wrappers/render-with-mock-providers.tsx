import { AppWrapper } from "@/wrapper";
import { QueryClient } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const wrapper = ({ children }: { children: ReactNode }) => (
  <NextIntlClientProvider locale="pt">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppWrapper queryClient={queryClient}>{children}</AppWrapper>
    </LocalizationProvider>
  </NextIntlClientProvider>
);

export const renderWithMockProviders = (children: ReactNode) => {
  return {
    wrapper,
    ...render(children,
    {
      wrapper
    })
  }
}
