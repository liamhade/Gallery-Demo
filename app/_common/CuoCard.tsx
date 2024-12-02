import { useTheme } from "@mui/material";
import Grid, { GridProps } from "@mui/material/Grid";
import React from "react";
import "./CuoCard.scss";

interface CuoCardProps extends GridProps {}

export default function CuoCard(props: CuoCardProps) {
  const { children, ...rest } = props;
  return (
    <Grid container className="cuo-card" {...rest}>
      {children}
    </Grid>
  );
}
