"use client";

import Button from "@/components/button";
import Checklist from "@/components/checklist";
import DateInput from "@/components/dateField";
import InputButton from "@/components/inputButton";
import { Box, Divider } from "@mui/material";
import React from "react";
import { AddIcon } from "public/icons";
import Label from "@/components/label";
import RadioOptions from "@/components/radio";
import Select from "@/components/select";
import TextInput, { CurrencyAdornment } from "@/components/textField";

export default function ComponentsPage() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        overflow: "auto",
        width: "100vw",
      }}
    >
      <Button onClick={() => {}}>Botão Teste</Button>
      <Divider />
      <Checklist
        name="Nome Checklist"
        required={false}
        helperText="HelperText Checklist"
        options={["Um", "Dois"]}
        tooltip="Tooltip Checklist"
        value={["Um", "Dois"]}
        onChange={() => {}}
      />
      <Divider />
      <DateInput
        name="Nome DateInput"
        required={false}
        helperText="HelperText DateInput"
        tooltip="Tooltip DateInput"
        value={null}
        onChange={() => {}}
      />
      <Divider />
      <InputButton
        text="Text Input Button Sem Icon"
        onClick={() => {}}
        width={200}
      />
      <Divider />
      <InputButton
        text="Text Input Button Com Icon"
        onClick={() => {}}
        width={250}
        icon={AddIcon}
      />
      <Divider />
      <Label
        title="Title da Label"
        description="Description da Label"
        tooltip="Tooltip da label"
      />
      <Divider />
      <RadioOptions
        name="Nome RadioOptions"
        required={false}
        helperText="HelperText RadioOptions"
        tooltip="Tooltip RadioOptions"
        value={"Um"}
        options={["Um", "Dois"]}
        onChange={() => {}}
      />
      <Divider />
      <Select
        label="Nome Select (que se chama -label- por algum motivo)"
        required={false}
        helperText="HelperText Select"
        tooltip="Tooltip Select"
        value={"Um"}
        options={["Um", "Dois"]}
        onChange={() => {}}
      />
      <Divider />
      <TextInput
        label="Nome TextInput Basico"
        required={false}
        helperText="HelperText TextInput"
        tooltip="Tooltip TextInput"
        value={"Value do textinput"}
        onChange={() => {}}
      />
      <Divider />
      <TextInput
        label="Nome TextInput phone"
        required={false}
        helperText="HelperText TextInput phone"
        tooltip="Tooltip TextInput phone"
        onChange={() => {}}
        type="phone"
        placeholder="(21) 99999-9999"
      />
      <Divider />
      <TextInput
        label="Nome TextInput currency"
        required={false}
        helperText="HelperText TextInput currency"
        tooltip="Tooltip TextInput currency"
        onChange={() => {}}
        type="currency"
        currencyAdornment={CurrencyAdornment.BRL}
      />
      <Divider />
      <TextInput
        label="Nome TextInput document -cnpj ou cpf-"
        required={false}
        helperText="HelperText TextInput document"
        tooltip="Tooltip TextInput document"
        onChange={() => {}}
        type="document"
      />
    </Box>
  );
}
