import Calculator from './container/Calculator';
import History from './container/History';
import Grid from "@mui/material/Grid";
import { CalculatorDataProvider } from './context/CalculatorContext';
import { Container } from '@mui/material';

function App() {

    return (
        <div>
            <CalculatorDataProvider>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8} lg={8}>
                            <Calculator />
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                            <History />
                        </Grid>
                    </Grid>
                </Container>
            </CalculatorDataProvider>
        </div>
    );
}

export default App;
