"use client";

import React from "react";
import { Container, InfoWrapper } from "./styles";
import Login from "@/features/login";

export default function ComponentsPage() {
  return (
    <Container>
      <Login />
      <InfoWrapper></InfoWrapper>
    </Container>
  );
}
