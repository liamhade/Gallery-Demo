"use client";

import Grid from "@mui/material/Grid";
import Header from "./components/Header";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("/backrepatcuo.png")',
      }}
      alignItems={"start"}
      alignContent={"start"}
    >
      <Header />
      <Grid container direction={"column"} flex={1} alignItems={"start"}>
        {children}
      </Grid>
    </Grid>
  );
}
