import { numbers, operators, actions } from '../constants/Keys.constants';
import { Grid } from '@mui/material';
import Button from './Button';

function Keypad() {
    return (
        <Grid container spacing={0.5}>
            <Grid item spacing={0.5} xs={10}>
                <Grid container spacing={0.5}>
                    {
                        numbers.map((number, index) => {
                            return <Grid item xs={4}>
                                <Button
                                    key={`key-number-${number.label}-${index}`}
                                    label={number.label}
                                    value={number.value} />
                            </Grid>
                        })
                    }

                    {
                        actions.map((number, index) => {
                            return <Grid item xs={4}>
                                <Button
                                    key={`key-number-${number.label}-${index}`}
                                    label={number.label}
                                    value={number.value} />
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
            <Grid item spacing={0.5} xs={2}>
                <Grid container spacing={0.5} direction={"column"}>
                    {
                        operators.map((operator, index) => {
                            return <Grid item xs={4}><Button
                                key={`key-operator-${operator.label}-${index}`}
                                label={operator.label}
                                value={operator.value} /></Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>

    );
}

export default Keypad;