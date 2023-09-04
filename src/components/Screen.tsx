import { useContext } from "react";
import { CalculatorDataContext } from '../context/CalculatorContext';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function Screen() {
  const { calculatorState } = useContext(CalculatorDataContext);

  return (
    <Grid container spacing={2}>
      <Grid item spacing={2} xs={12}>
        <TextField label={"Query"} value={calculatorState?.query} fullWidth/>
      </Grid>
      <Grid item spacing={2} xs={12}>
        <TextField label={"Result"} value={calculatorState?.result} fullWidth/>
      </Grid>
    </Grid>
  );
}

export default Screen;
