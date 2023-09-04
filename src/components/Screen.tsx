import { useContext, KeyboardEvent } from "react";
import { CalculatorDataContext, CalculatorContextValue } from '../context/CalculatorContext';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function Screen() {
  const { calculatorState, handleKeyPress, handleClick } = useContext(CalculatorDataContext) as CalculatorContextValue;

  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    handleKeyPress(event);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="text-field-query"
          label={"Query"}
          value={calculatorState?.query}
          onKeyDown={onKeyPress} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="text-field-result" label={"Result"} value={calculatorState?.result} fullWidth />
      </Grid>
    </Grid>
  );
}

export default Screen;
