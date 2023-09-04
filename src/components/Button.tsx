import { useContext, MouseEvent } from 'react';
import { CalculatorDataContext, CalculatorContextValue } from '../context/CalculatorContext';
import { Button as MaterialButton } from '@mui/material';

type ButtonProps = {
    readonly label: string,
    readonly value: string,
}

function Button({ label, value }: ButtonProps) {
    const { handleClick } = useContext(CalculatorDataContext) as CalculatorContextValue;

    const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        handleClick(event);
    }

    return (
        <MaterialButton
            variant='contained'
            fullWidth={true}
            onClick={(event) => {
                onSubmit(event)
            }} value={value}>
            {label}
        </MaterialButton>
    );
}

export default Button;