import {
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./EmailDialog.scss";
import CuoButton from "@/app/_common/CuoButton";
import CloseIcon from "@mui/icons-material/Close";
import GalleryService from "@/app/_services/GalleryService";
import Cookies from "js-cookie";

// Shows up when the user tries to download an image without
// having already put in their customer info
export default function EmailDialog({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: any;
  onConfirm: any;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");

  const setCookie = (email: string, name: string) => {
    Cookies.set(
      "cuo-gallery",
      JSON.stringify({
        email,
        name,
      }),
      { expires: 7 }
    );
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setCookie(" ", " ");
    setName("");
    setEmail("");
    onClose();
    onConfirm();
  };

  return (
    <Dialog
      open={open}
      className="email-dialog"
      sx={{
        outline: "solid rgb(26, 39, 177) 2px",
      }}
      onClose={onClose}
    >
      <form onSubmit={onSubmit}>
        <Grid container direction={"column"} rowGap={2}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5" fontWeight={600}>
              Let's keep in touch
            </Typography>
            <IconButton onClick={() => onClose()}>
              <CloseIcon />
            </IconButton>
          </Grid>

          <NameInput name={name} setName={setName} />
          <EmailInput email={email} setEmail={setEmail} />
          <InstagramInput instagram={instagram} setInstagram={setInstagram} />

          <Typography fontSize={10} fontStyle={"italic"}>
            This information is neither saved nor sent anywhere. This popup is merely for demonstration purposes.
          </Typography>

          <Grid container justifyContent={"center"}>
            <CuoButton
              fullWidth
              sx={{ p: 2 }}
              variant="contained"
              type="submit"
              label="Submit"
            />
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
}

function NameInput({ name, setName }: { name: string; setName: Function }) {
  return (
    <TextField
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
      label="Full name"
    />
  );
}

function InstagramInput({
  instagram,
  setInstagram,
}: {
  instagram: string;
  setInstagram: Function;
}) {
  return (
    <TextField
      value={instagram}
      onChange={(e) => setInstagram(e.target.value)}
      InputProps={{
        startAdornment: <InputAdornment position="start">@</InputAdornment>,
      }}
      label="Instagram"
    />
  );
}

function EmailInput({
  email,
  setEmail,
}: {
  email: string;
  setEmail: Function;
}) {
  return (
    <TextField
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      type="email"
      label="Email"
    />
  );
}
