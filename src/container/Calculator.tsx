import Keypad from '../components/Keypad';
import Screen from '../components/Screen';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function Calculator() {

    return (
        <Paper elevation={3}>
            <Box p={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Screen />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Keypad />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}

export default Calculator;