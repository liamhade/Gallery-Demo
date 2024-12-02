import { Button, Grid, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
// import Logo from "@/public/cuologo.png";
import GitHub_Logo from "@/public/github_logo.png";
import Gallery_Logo from "@/public/gallery_demo_logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Header.scss";
import PageContainer from "@/app/_common/PageContainer";
import CuoButton from "@/app/_common/CuoButton";

export default function Header() {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent={"space-around"}
      alignContent={"center"}
      alignItems={"center"}
      className="header-container"
    >
      <PageContainer sx={{ alignItems: "center" }}>
        <Grid item>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            <Image 
              src={Gallery_Logo}
              style={{
                maxHeight: "130px",
                maxWidth: "130px",
                objectFit: "contain",
              }}
              alt="Gallery Demo"
            />
          </Grid>
        </Grid>

        

        <Grid
          container
          justifyContent={"left"}
          p={2}
          flex={1}
          columnGap={1}
          sx={{
            ".MuiButtonBase-root": {
              ":hover": {
                color: "#F13EFF",
                background: "#00000000",
              },
            },
          }}
        >
        </Grid>

        <Grid item>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"end"}
            p={2}
            columnGap={4}
          >
            <Grid item>

              <IconButton
                target="_blank"
                href="https://github.com/liamhade"
              >  
                <Image
                  src={GitHub_Logo}
                  style={{
                    maxHeight: "40px",
                    maxWidth: "40px",
                    objectFit: "contain",
                  }}
                  alt="GitHub"
                />
              </IconButton>

              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/liam-hade-516403209/"
              >
                <LinkedInIcon
                  sx={{ color: theme.palette.primary.main, fontSize: "30px" }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
    </Grid>
  );
}
