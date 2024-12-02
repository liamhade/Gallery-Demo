"use client";
import "./BGallery.scss";
import * as React from "react";
import { useState, useEffect } from "react";
import { Grid, MenuItem, Select, Typography } from "@mui/material";
import GalleryService from "@/app/_services/GalleryService";
import PageContainer from "@/app/_common/PageContainer";
import Gallery from "./components/Gallery";
import images from "./images.json";

export default function page() {
  // const [allShowImages, setAllShowImages] = useState<any>({ "": [] });

  const allShowImages = images;

  const [imagesAreLoaded, setImagesAreLoaded] = useState(true);
  const [showName, setShowName] = useState("test");


  // useEffect(() => {
  //   async function getAllShowsAndImages() {
  //     try {
  //       const resp = await GalleryService.getState();
  //       const resp_json = await resp.json();
  //       setAllShowImages(resp_json);
  //     } catch (error) {
  //       console.error("Error fetching gallery state:", error);
  //     } finally {
  //       setImagesAreLoaded(true);
  //     }
  //   }
  //   getAllShowsAndImages();
  // }, []);

  // useEffect(() => {
  //   if (imagesAreLoaded && Object.keys(allShowImages).length > 0) {
  //     const default_show_name = Object.keys(allShowImages)[0];
  //     setShowName(default_show_name);
  //   }
  // }, [allShowImages, imagesAreLoaded]);

  return (
    <PageContainer>
      <Grid container>
        <GalleryTitle
          showName={showName}
          setShowName={setShowName}
          showNames={Object.keys(allShowImages)}
        />
        <Gallery
          imagesAreLoaded={imagesAreLoaded}
          showName={showName}
          imageItems={allShowImages[showName]}
        />
      </Grid>

      <Grid container justifyContent={"center"}>
        <Typography>@ ComedyUO 2024</Typography>
      </Grid>
    </PageContainer>
  );
}

function GalleryTitle(props: any) {
  const { text, showName, setShowName, showNames } = props;
  return (
    <Grid
      container
      justifyContent={"center"}
      mt={2}
      mb={2}
      p={2}
      columnGap={2}
      alignItems={"center"}
      sx={{
        background: "white",
        borderRadius: "8px",
        border: "1px solid #1a307a20",
      }}
    >
      {showName && (
        <Grid container direction={"column"} rowGap={1} alignItems={"center"}>
          <Typography align="center" fontSize={14}>
            {" "}
            This a demonstration of the gallery application created by Liam Hade with the help 
            of <a target="_blank" href="https://www.linkedin.com/in/otitodarluzu/">Otitodirichukwu Darl-Uzu</a> for <a target="_blank" href="https://www.comedyuo.com/">Comedy Underground Overground</a>.
            {" "}
          </Typography>
          <Grid item>
            <Typography variant="h6" display="inline">
              {" "}
              🎥 Show:{" "}
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={showName}
              size="small"
              onChange={(e) => setShowName(e.target.value)}
            >
              {showNames.map((showName: string) => (
                <MenuItem key={showName} value={showName}>
                  <Typography>{showName}</Typography>
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
