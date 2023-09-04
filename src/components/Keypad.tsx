import { numbers, operators, actions } from '../constants/Keys.constants';
import { Grid } from '@mui/material';
import Button from './Button';

function Keypad() {
    return (
        <Grid container spacing={0.5}>
            <Grid item xs={10}>
                <Grid container spacing={0.5}>
                    {
                        numbers.map((number, index) => {
                            return <Grid item xs={4} key={`key-grid-number-${number.label}-${index}`}>
                                <Button
                                    key={`key-number-${number.label}-${index}`}
                                    label={number.label}
                                    value={number.value} />
                            </Grid>
                        })
                    }

                    {
                        actions.map((action, index) => {
                            return <Grid item xs={4} key={`key-grid-number-${action.label}-${index}`}>
                                <Button
                                    key={`key-action-${action.label}-${index}`}
                                    label={action.label}
                                    value={action.value} />
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container spacing={0.5} direction={"column"}>
                    {
                        operators.map((operator, index) => {
                            return <Grid key={`key-grid-operator-${operator.label}-${index}`} item xs={4}><Button
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