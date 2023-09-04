import { createContext, useState, MouseEvent } from 'react';
import { evaluate } from 'mathjs';

interface IcalculatorState {
    query: string,
    result: string,
    previousCalculations: CalculationHistoryItem[]
}

type CalculationHistoryItem = {
    query: string,
    timestamp: Date
}

export type CalculatorContextValue = {
    calculatorState: IcalculatorState,
    handleClick(event: MouseEvent<HTMLButtonElement>): void
}

export const CalculatorDataContext = createContext<Partial<CalculatorContextValue>>({});

export const CalculatorDataProvider = (props: any): JSX.Element => {
    const [calculatorState, setCalculatorState] = useState<IcalculatorState>({ result: '', query: '', previousCalculations: [] });

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        let buttonEvent = event.target as HTMLButtonElement;

        switch (buttonEvent.value) {
            case '=': {
                if (calculatorState.query !== '') {
                    try {
                        setCalculatorState((prevState: IcalculatorState) => {
                            let calculationList = prevState.previousCalculations;
                            calculationList.push({
                                query: `${calculatorState.query} = ${evaluate(calculatorState.query)}`,
                                timestamp: new Date
                            });

                            return { previousCalculations: calculationList, query: '', result: evaluate(calculatorState.query) }
                        });
                    } catch (error) {
                        setCalculatorState((prevState: IcalculatorState) => {
                            return { ...prevState, query: '', result: error }
                        });
                    }
                }

                break;
            }

            case 'clear': {
                setCalculatorState((prevState: IcalculatorState) => {
                    return { ...prevState, query: '' }
                });

                break;
            }

            case 'delete': {
                setCalculatorState((prevState: IcalculatorState) => {
                    return { ...prevState, result: '' }
                });

                break;
            }

            case '': {
                break;
            }

            default: {
                setCalculatorState((prevState: IcalculatorState) => {
                    return {
                        ...prevState,
                        query: prevState.query + buttonEvent.value,
                        result: prevState.result
                    }
                })
            }
        }
    }

    return (
        <CalculatorDataContext.Provider
            value={{
                calculatorState,
                handleClick
            }}
        >
            {props.children}
        </CalculatorDataContext.Provider>
    );
};

