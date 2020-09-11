import React from "react";
import { Grid,Button } from "@material-ui/core";
import { makeStyles,withStyles } from "@material-ui/core/styles";
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
import InfoIcon from "@material-ui/icons/Info";
import "./Table1.css";
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const useRowStyles = makeStyles({
  root: {
    width:"100vw",
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
  timeToExploit
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
        <TableCell align="left" component="th" scope="row">
          {row.remediationAction}
        </TableCell>
        <TableCell align="left">{row.affects}</TableCell>
        <TableCell align="left">{row.risk}</TableCell>
        <TableCell align="left">{row.cisControl}</TableCell>
        <TableCell align="left">
          {" "}
          <div className="foldable">
            <p style={{ color: "red" }}>Ready to exploit</p>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </div>{" "}
        </TableCell>
        <TableCell>
          <Button style={{textTransform:"capitalize",background:"black",color:"white"}} size="small">
            Lorem, ipsum dolor.
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
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
                    Lorem ipsum dolor sit.
                  </Typography>
                  <br />
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam magni laboriosam ipsa suscipit doloribus, nam
                    corporis consectetur et fuga eos reiciendis quaerat ratione
                    minus odio quos ex natus impedit ducimus! Numquam magni
                    laboriosam ipsa suscipit doloribus, nam corporis consectetur
                    et fuga eos reiciendis quaerat ratione minus odio quos ex
                    natus impedit ducimus!
                  </div>
                </Grid>
                <Grid item xs="2" className="downloadBtns">
                  <button>Download as PDF</button>
                  <button>Download as CSV</button>
                </Grid>
                <Grid item xs="2" className="downloadBtns">
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

const rows = [
  createData("Change password of a user", 159, 6.0, "4,6,24,3"),
  createData(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque!",
    237,
    9.0,
    "4,6,24,3"
  ),
  createData("Lorem ipsum dolor sit amet consectetur", 262, 15, 17),
];

export default function FContent() {
  return (
    <div>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <div className="thDiv">
                        Remediated action
                        <div className="i">
                        <LightTooltip title="Unfold a remediation action to review the source of the exposure and how to mitigate the risk.">

                        <InfoOutlinedIcon />
                        </LightTooltip >

                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="thDiv">
                        Affects
                        <div className="i">
                        <LightTooltip title="number of alerts affected by this remediation.">

                        <InfoOutlinedIcon />
                        </LightTooltip >
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="thDiv">
                        Risk
                        <div className="i">
                        <LightTooltip title="The risk level is calculated as the weighted sum of high, medium and low severity alerts.">

                        <InfoOutlinedIcon />
                        </LightTooltip >
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left" style={{ width: "10rem" }}>
                      <div className="thDiv">
                        CIS Control
                        <div className="i">
                        <LightTooltip title="A set of 20 best practises making up the critical security controls, published by the Center for Internet Security (CIS). ">

                      <InfoOutlinedIcon />
                      </LightTooltip >
                          
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left" style={{ width: "15rem" }}>
                      <div className="thDiv">
                        Time to Exploit
                        <div className="i">
                        <LightTooltip title="Estimated time needed for cybercriminals to exploit exposure ">

                      <InfoOutlinedIcon />
                      </LightTooltip >
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
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}