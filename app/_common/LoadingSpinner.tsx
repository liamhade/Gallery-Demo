import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import loader from "@/public/loader.svg";

export default function LoadingSpinner({
  loadingText = "Loading...",
  showText = true,
  size = 80,
}: {
  loadingText?: string;
  showText?: boolean;
  size?: number;
}) {
  return (
    <Grid
      container
      justifyItems={"center"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Image
        src={loader}
        style={{
          padding: "0",
          width: `${size}` + "px",
          height: `${size}` + "px",
          position: "relative",
          objectFit: "cover",
        }}
        alt="ass-hat"
      />
      {showText && (
        <Grid item xs={12} pt={1} pl={1.5}>
          <Grid container justifyContent={"center"}>
            <Typography fontWeight={"200"} sx={{ color: "#a9a9a9" }}>
              {loadingText}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
