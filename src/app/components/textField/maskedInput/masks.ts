type CurrencyMask = {
  mask: string;
  blocks: {
    num: {
      mask: typeof Number;
      padFractionalZeros: boolean;
      thousandsSeparator: string;
      radix: string;
      mapToRadix: string[];
    };
  };
};

type PhoneMask = {
  mask: [string, string];
};

type TaxIdMask = {
  mask: [string, string];
};

export type IMask = CurrencyMask | PhoneMask | TaxIdMask | undefined;

export const currencyMask = {
  mask: "num",
  blocks: {
    num: {
      mask: Number,
      padFractionalZeros: true,
      thousandsSeparator: ".",
      radix: ",",
      mapToRadix: ["."],
    },
  },
};

export const phoneMask = {
  mask: ["(00) 0000-0000", "(00) 00000-0000"],
};

export const taxIdMask = {
  mask: ["000.000.000-00", "00.000.000/0000-00"],
};

export const getMask = (type?: string) => {
  switch (type) {
    case "currency":
      return currencyMask;
    case "phone":
      return phoneMask;
    case "document":
      return taxIdMask;
    default:
      return undefined;
  }
};
