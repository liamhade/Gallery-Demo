import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";
import "./CuoButton.scss";
import LoadingSpinner from "./LoadingSpinner";

interface CuoButton extends ButtonProps {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  disableOnAsync?: boolean;
}

export default function CuoButton(props: CuoButton) {
  const { label, variant, color, icon, disabled, disableOnAsync, ...rest } =
    props;
  return (
    <Button
      disableElevation
      disableRipple
      disabled={disableOnAsync || disabled}
      variant={variant ?? "contained"}
      color={color ?? "primary"}
      {...rest}
      className="cuo-button"
    >
      {disableOnAsync ? (
        <LoadingSpinner showText={false} size={18} />
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </Button>
  );
}
