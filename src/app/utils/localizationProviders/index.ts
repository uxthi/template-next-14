import { currentLocale } from "src/navigation";
import { ptBR, enUS } from "@mui/x-date-pickers/locales";

interface ILocalizationProviders {
  [key: string]: any;
}

const localizationProviders: ILocalizationProviders = {
  pt: ptBR.components.MuiLocalizationProvider.defaultProps.localeText,
  en: enUS.components.MuiLocalizationProvider.defaultProps.localeText
}

export const localeText = localizationProviders[currentLocale] ?? localizationProviders[currentLocale];
