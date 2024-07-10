import { fireEvent, render } from "@testing-library/react";
import { SnackbarProvider, SnackbarEnum, useSnackbarDispatch } from ".";

const ConsumerComponent = () => {
  const { message, showSnackbar, triggerSnackbar, type } =
    useSnackbarDispatch();
  return (
    <>
      <button onClick={() => triggerSnackbar("Test", SnackbarEnum.SUCCESS)}>
        Show snackbar
      </button>
      <p>Snackbar state: {showSnackbar}</p>
      <p>Snackbar type: {type}</p>
      <p>Snackbar message: {message}</p>
    </>
  );
};

describe("snackbarDispatchContext", () => {
  it("update context", () => {
    const { getByText } = render(
      <SnackbarProvider>
        <ConsumerComponent />
      </SnackbarProvider>
    );

    fireEvent.click(getByText("Show snackbar"));

    expect(getByText("Snackbar type: success")).toBeVisible();
    expect(getByText("Snackbar message: Test")).toBeVisible();
  });
});
