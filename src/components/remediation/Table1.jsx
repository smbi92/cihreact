import React, { useContext } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import customClasses from "./Table1.module.css";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import controlImg from "../../assets/images/CIS-controls.png";
import { FetchRemediationContext } from "../../context/FetchRemidiation";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(
  remediationAction,
  affects,
  risk,
  cisControl,
  timeToExploit,
  description
) {
  return {
    remediationAction,
    affects,
    risk,
    cisControl,
    timeToExploit,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell align="left" component="th" scope="row" width="30%">
          {row.remediationAction}
        </TableCell>
        <TableCell align="left" style={{ paddingLeft: "2rem" }}>
          {row.affects}
        </TableCell>
        <TableCell align="left" style={{ paddingLeft: "2rem" }}>
          {row.risk}
        </TableCell>
        <TableCell align="left" style={{ paddingLeft: "2rem" }}>
          {row.cisControl}
        </TableCell>
        <TableCell align="left">
          {" "}
          <div className={customClasses.foldable}>
            <p style={{ color: "red" }}>{row.timeToExploit}</p>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </div>{" "}
        </TableCell>
        <TableCell align="center" width="20%">
          <Button
            style={{
              textTransform: "capitalize",
              background: "black",
              color: "white",
              width: "100%",
              padding: "0.5rem",
            }}
            size="small"
          >
            Remediated actions
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
          width="20%"
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              style={{
                marginBottom: "2rem",
                border: "1px solid green",
                padding: "1rem",
                width: "90%",
              }}
            >
              <Grid container justify="space-between">
                <Grid item xs="6">
                  <Typography
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    {row.remediationAction}
                  </Typography>
                  <br />
                  <div>{row.description}</div>
                </Grid>
                <Grid item xs="4" className={customClasses.downImg}>
                  <img src={controlImg} alt="" />
                </Grid>
                <Grid item xs="2" className={customClasses.downloadBtns}>
                  <button>Download as PDF</button>
                  <button>Download as CSV</button>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function FContent() {
  const value = useContext(FetchRemediationContext);
  const { table1State } = value;
  const rows = [];

  for (const key in table1State) {
    const obj = table1State[key];
    const date = new Date(obj.readyToExploit);
    const rte = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`; 
    rows.push(
      createData(
        obj.title,
        obj.affects,
        obj.risks,
        [...obj.cisControls].join(" , "),
        rte,
        obj.description
      )
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <div className={customClasses.thDiv}>
                Remediated action
                <div className={customClasses.i}>
                  <LightTooltip title="Unfold a remediation action to review the source of the exposure and how to mitigate the risk.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="center">
              <div className={customClasses.thDiv}>
                Affects
                <div className={customClasses.i}>
                  <LightTooltip title="number of alerts affected by this remediation.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="center">
              <div className={customClasses.thDiv}>
                Risk
                <div className={customClasses.i}>
                  <LightTooltip title="The risk level is calculated as the weighted sum of high, medium and low severity alerts.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="center" style={{ width: "10rem" }}>
              <div className={customClasses.thDiv}>
                CIS Control
                <div className={customClasses.i}>
                  <LightTooltip title="A set of 20 best practises making up the critical security controls, published by the Center for Internet Security (CIS). ">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="center" style={{ width: "15rem" }}>
              <div className={customClasses.thDiv}>
                Time to Exploit
                <div className={customClasses.i}>
                  <LightTooltip title="Estimated time needed for cybercriminals to exploit exposure ">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
