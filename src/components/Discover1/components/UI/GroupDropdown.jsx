import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";

import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiNativeSelect-root": {
      height: "2rem",
      paddingTop: "2px",
      border: "1px solid #000",
    },
    "& .MuiSvgIcon-root": {
      background: "#035aa6",
      color: "#fff",
      height: "96%",
      marginTop: "-10px",
      marginRight: "1px",
      borderRadius: "2px",
      width: "1rem",
    },
  },
  input: {
    width: "7rem",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export default function GroupedSelect(props) {
  const { dropdownData } = props;
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          id="demo-customized-select-native"
          // value={age}
          // onChange={handleChange}
          input={<BootstrapInput />}
        >
          {dropdownData.map((dt, i) => {
            return (
              <optgroup key={i} label={dt.label}>
                {dt.array.map((el, i) => {
                  return (
                    <option key={i} value={el}>
                      {el}
                    </option>
                  );
                })}
              </optgroup>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}