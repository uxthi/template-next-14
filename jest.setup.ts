import "@testing-library/jest-dom";
import * as NextIntl from 'next-intl';

jest.mock("next-intl", () => {
  const actual = (jest.requireActual("next-intl") as typeof NextIntl);

  return {
    ...actual,
    useTranslations: jest.fn(),
  };
});