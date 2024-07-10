import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 4,
}));

export const TitleContainer = styled(Box)(() => ({
  height: 16,
  width: "full",
  display: "flex",
  flexDirection: "row",
  gap: 1,
}));

export const SubtitleContainer = styled(Box)(() => ({
  height: 16,
  width: "full",
  paddingBottom: 4,
  display: "flex",
  flexDirection: "row",
}));

export const Title = styled(Typography)(({ theme }) => ({
  font: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.subtitle2?.fontSize,
  lineHeight: "16px",
  color: theme.palette.text?.primary,
}));

export const Description = styled(Typography)(({ theme }) => ({
  font: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.body3.fontSize,
  lineHeight: "14px",
  color: theme.palette.text?.primary,
}));
