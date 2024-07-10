import { createTranslator } from "next-intl";
import ptMessages from "messages/pt.json";

export const createTranslatorMock = (namespace?: string) => {
  return createTranslator({
    locale: "pt",
    namespace,
    messages: ptMessages,
  });
}