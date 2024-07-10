import { formatValueToBRL } from "./";

describe("formatValueToBRL", () => {
  it("formats zero correctly", () => {
    expect(formatValueToBRL(0)).toBe("R$ 0,00");
  });

  it("formats a normal number correctly", () => {
    expect(formatValueToBRL(1234)).toBe("R$ 1.234,00");
  });

  it("formats a number with cents correctly", () => {
    expect(formatValueToBRL(1234.56)).toBe("R$ 1.234,56");
  });

  it("formats a very large number correctly", () => {
    expect(formatValueToBRL(123456789)).toBe("R$ 123.456.789,00");
  });

  it("formats a negative number correctly", () => {
    expect(formatValueToBRL(-1234.56)).toBe("R$ -1.234,56");
  });

  it("handles decimal precision correctly", () => {
    expect(formatValueToBRL(1234.5678)).toBe("R$ 1.234,57");
  });
});
