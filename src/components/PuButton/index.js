import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// clsx is a utility for constructing className strings conditionally
import clsx from "clsx";

// @mui material components
import Button from "@mui/material/Button";

// Custom styles for PuButton
import styles from "./styles";

const PuButton = forwardRef(
  ({ buttonColor, variant, size, circular, iconOnly, children, customClass, ...rest }, ref) => {
    const classes = styles({ buttonColor, variant, size, iconOnly });
    return (
      <Button
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === "gradient" ? "contained" : variant}
        size={size}
        className={clsx(classes[variant], customClass, {
          [classes.circular]: circular,
          [classes.iconOnly]: iconOnly,
        })}
      >
        {children}
      </Button>
    );
  }
);

// Setting default values for the props of PuButton
PuButton.defaultProps = {
  size: "medium",
  variant: "contained",
  buttonColor: "white",
  circular: false,
  iconOnly: false,
  customClass: "",
};

// Typechecking props for the PuButton
PuButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  buttonColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};

export default PuButton;