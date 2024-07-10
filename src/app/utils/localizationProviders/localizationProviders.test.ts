describe("localizationProviders", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("returns pt-br as default value", () => {
    jest.mock("../../../navigation", () => ({
      currentLocale: "pt",
    }));

    const { localeText } = require(".");

    expect(localeText.previousMonth).toBe("Mês anterior");
  });

  it("returns en value", () => {
    jest.mock("../../../navigation", () => ({
      currentLocale: "en",
    }));

    const { localeText } = require(".");

    expect(localeText.previousMonth).toBe("Previous month");
  });
});
