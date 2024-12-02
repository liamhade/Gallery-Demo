import "./Gallery.scss";
import * as React from "react";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import GalleryService from "@/app/_services/GalleryService";
import EmailDialog from "./EmailDialog";
import Cookies from "js-cookie";

export default function Gallery(props: any) {
  const { showName, imageItems, imagesAreLoaded } = props;
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  const [openDialog, setOpenDialog] = useState(false);
  const [hoveredId, setHoveredId] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");

  const handleDownloadImage = (name: string, url: string) => {
    const loginCookie = Cookies.get("cuo-gallery");

    setImageName(name);
    if (loginCookie) {
      GalleryService.downloadImage(showName, name, url);
    } else {
      setOpenDialog(true);
    }
  };

  return (
    <ImageList
      className="image-list"
      variant="masonry"
      cols={matchesBreakpoint ? 2 : 4}
      gap={12}
    >
      {imagesAreLoaded &&
        imageItems?.map((image: any) => (
          <ImageListItem
            key={image.url}
            onMouseEnter={() => {
              setHoveredId(image.url);
            }}
            onMouseLeave={() => {
              setHoveredId("");
            }}
            onClick={() => handleDownloadImage(image.name, image.url)}
          >
            <img
              srcSet={`${image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${image.url}`}
              className="gallery-image"
              alt="image not loading"
              loading="lazy"
            />
            {hoveredId === image.url && (
              <ImageListItemBar
                sx={{
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 100%)",
                }}
                actionIcon={
                  <IconButton sx={{ color: "white" }}>
                    <DownloadIcon />
                  </IconButton>
                }
              />
            )}
          </ImageListItem>
        ))}
      <EmailDialog
        onConfirm={() => GalleryService.downloadImage(showName, imageName, hoveredId)}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </ImageList>
  );
}
