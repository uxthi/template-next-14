import { useState, useEffect } from "react";

export const useCurrentDay = (): string => {
  const [currentDate, setCurrentDate] = useState<string>("");

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  };

  useEffect(() => {
    const date = new Date();
    const dateString = formatDate(date);
    setCurrentDate(dateString);
  }, []);

  return currentDate;
};
