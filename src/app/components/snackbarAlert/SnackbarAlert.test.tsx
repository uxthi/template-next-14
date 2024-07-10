import { SnackbarProvider, SnackbarEnum } from "@/contexts/snackbarContext";
import SnackbarAlert from ".";
import { render } from "@testing-library/react";

describe("snackbarAlert", () => {
  it("renders component with props", () => {
    const { getByText } = render(
      <SnackbarProvider>
        <SnackbarAlert message="Test" showSnackbar type={SnackbarEnum.ERROR} />
      </SnackbarProvider>
    );

    expect(getByText("Test")).toBeVisible();
  });

  describe("success case", () => {
    it("shows success icon in snackbar", () => {
      const { getByTestId } = render(
        <SnackbarProvider>
          <SnackbarAlert
            message="Test"
            showSnackbar
            type={SnackbarEnum.SUCCESS}
          />
        </SnackbarProvider>
      );

      expect(getByTestId("SuccessOutlinedIcon")).toBeVisible();
    });
  });

  describe("error case", () => {
    it("shows error icon in snackbar", () => {
      const { getByTestId } = render(
        <SnackbarProvider>
          <SnackbarAlert
            message="Test"
            showSnackbar
            type={SnackbarEnum.ERROR}
          />
        </SnackbarProvider>
      );

      expect(getByTestId("ErrorOutlineIcon")).toBeVisible();
    });
  });

  describe("info case", () => {
    it("shows info icon in snackbar", () => {
      const { getByTestId } = render(
        <SnackbarProvider>
          <SnackbarAlert message="Test" showSnackbar type={SnackbarEnum.INFO} />
        </SnackbarProvider>
      );

      expect(getByTestId("InfoOutlinedIcon")).toBeVisible();
    });
  });

  describe("warning case", () => {
    it("shows warning icon in snackbar", () => {
      const { getByTestId } = render(
        <SnackbarProvider>
          <SnackbarAlert
            message="Test"
            showSnackbar
            type={SnackbarEnum.WARNING}
          />
        </SnackbarProvider>
      );

      expect(getByTestId("ReportProblemOutlinedIcon")).toBeVisible();
    });
  });
});
