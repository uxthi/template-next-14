import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ContainerProps {
  "is-right-icon": boolean;
  width: number | string;
}

export const ButtonContainer = styled(Box)<ContainerProps>(
  ({ theme, ["is-right-icon"]: isRightIcon, width }) => ({
    display: "flex",
    flexDirection: isRightIcon ? "row-reverse" : "row",
    backgroundColor: theme.palette.primary?.["50"],
    borderRadius: 4,
    width: width,
    padding: "9px 12px",
    gap: 8,
  })
);

export const Text = styled(Typography)(({ theme }) => ({
  font: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.subtitle2?.fontSize,
  lineHeight: "18px",
  color: theme.palette.primary?.main,
}));
