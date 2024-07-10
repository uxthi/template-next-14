import { copyToClipboard } from ".";

describe("copyToClipboard", () => {
  beforeAll(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });
  });

  afterAll(() => {
    Object.assign(navigator, {
      clipboard: undefined,
    });
  });

  describe("when text is successfully copied to the clipboard", () => {
    it("calls navigator.clipboard.writeText with the correct text", async () => {
      const text = "Copy this mocked text";
      await copyToClipboard(text);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
    });
  });

  describe("when there is an error copying text to the clipboard", () => {
    it("handles the error and log it to the console", async () => {
      const error = new Error("Failed to copy");
      (navigator.clipboard.writeText as jest.Mock).mockRejectedValueOnce(error);
      const consoleSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      await copyToClipboard("text");
      expect(consoleSpy).toHaveBeenCalledWith("Erro ao copiar texto: ", error);

      consoleSpy.mockRestore();
    });
  });
});
