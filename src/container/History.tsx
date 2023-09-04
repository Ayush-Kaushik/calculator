import { useContext } from 'react';
import { CalculatorDataContext } from '../context/CalculatorContext';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';

function History() {
    const { calculatorState } = useContext(CalculatorDataContext);

    return (
        <Paper elevation={3}>
            <List subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    History
                </ListSubheader>
            }>
                {
                    calculatorState?.previousCalculations.map((item) => {
                        return (
                            <ListItem>
                                <ListItemText primary={item.query} secondary={item.timestamp.toLocaleString()} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </Paper>
    );
}

export default History;