"use client";

import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CalendarIcon } from "public/icons";
import Label from "../label";
import { Container } from "./styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "dayjs/locale/pt-br";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { currentLocale } from "src/navigation";
import { localeText } from "@/utils/localizationProviders";

interface DateInputProps {
  name: string;
  required: boolean;
  helperText: string;
  tooltip?: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}

const DATE_FORMAT = "DD/MM/YYYY";

const DateInput: React.FC<DateInputProps> = ({
  name,
  required,
  helperText,
  tooltip,
  value,
  onChange,
}) => {
  const isPtBR = currentLocale === "pt";
  const adapterLocale = isPtBR ? "pt-br" : "en";

  const formatDateToCalendar = (day: Dayjs) => {
    return Intl.DateTimeFormat(adapterLocale, {
      dateStyle: "full",
      timeStyle: "long",
    })
      .format(day.toDate())
      .slice(0, 3);
  };

  return (
    <Container>
      <Label
        required={required}
        title={name}
        description={helperText}
        tooltip={tooltip}
      />
      <LocalizationProvider
        localeText={localeText}
        adapterLocale={adapterLocale}
        dateAdapter={AdapterDayjs}
      >
        <DatePicker
          value={value}
          onChange={onChange}
          dayOfWeekFormatter={(day) => formatDateToCalendar(day)}
          slotProps={{ calendarHeader: { format: "MMMM/YYYY" } }}
          format={DATE_FORMAT}
          slots={{
            openPickerIcon: CalendarIcon,
          }}
        />
      </LocalizationProvider>
    </Container>
  );
};

export default DateInput;
