import { useContext } from "react";
import { CalculatorDataContext } from '../context/CalculatorContext';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function Screen() {
  const { calculatorState } = useContext(CalculatorDataContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField id="text-field-query" label={"Query"} value={calculatorState?.query} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="text-field-result" label={"Result"} value={calculatorState?.result} fullWidth />
      </Grid>
    </Grid>
  );
}

export default Screen;
