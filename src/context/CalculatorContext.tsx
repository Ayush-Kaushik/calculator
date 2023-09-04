import { createContext, useState, KeyboardEvent, MouseEvent } from 'react';
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
    handleClick(event: MouseEvent<HTMLButtonElement>): void,
    handleKeyPress(event: KeyboardEvent<HTMLInputElement>): void
}

export const CalculatorDataContext = createContext<Partial<CalculatorContextValue>>({});

export const CalculatorDataProvider = (props: any): JSX.Element => {
    const [calculatorState, setCalculatorState] = useState<IcalculatorState>({ result: '', query: '', previousCalculations: [] });


    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        let keyEvent = event.key;
        const allowedCharacters = /^[0-9+\-*/().=]$/;

        if (allowedCharacters.test(keyEvent)) {
            setCalculatorState((prevState: IcalculatorState) => {
                return {
                    ...prevState,
                    query: prevState.query + keyEvent,
                    result: prevState.result
                }
            })
        } else if (keyEvent === 'Enter' || keyEvent === '=') {
            if (calculatorState.query !== '') {
                try {
                    let outcome = evaluate(calculatorState.query)

                    setCalculatorState((prevState: IcalculatorState) => {
                        let calculationList = prevState.previousCalculations;

                        calculationList.push({
                            query: `${calculatorState.query} = ${outcome}`,
                            timestamp: new Date
                        });

                        return { previousCalculations: calculationList, query: '', result: evaluate(outcome) }
                    });
                } catch (error) {
                    let outcome: string = "";

                    if (error instanceof SyntaxError) {
                        outcome = "Invalid expression: please check your query again";
                    } else {
                        outcome = error as string;
                    }

                    setCalculatorState((prevState: IcalculatorState) => {
                        return { ...prevState, result: outcome }
                    });
                }
            }
        } else {
            event.preventDefault();
        }
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        let buttonEvent = event.target as HTMLButtonElement;

        switch (buttonEvent.value) {
            case '=': {
                if (calculatorState.query !== '') {
                    try {
                        let outcome = evaluate(calculatorState.query)

                        setCalculatorState((prevState: IcalculatorState) => {
                            let calculationList = prevState.previousCalculations;

                            calculationList.push({
                                query: `${calculatorState.query} = ${outcome}`,
                                timestamp: new Date
                            });

                            return { previousCalculations: calculationList, query: '', result: evaluate(outcome) }
                        });
                    } catch (error) {
                        let outcome: string = "";

                        if (error instanceof SyntaxError) {
                            outcome = "Invalid expression: please check your query again";
                        } else {
                            outcome = error as string;
                        }

                        setCalculatorState((prevState: IcalculatorState) => {
                            return { ...prevState, result: outcome }
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
                handleClick,
                handleKeyPress
            }}
        >
            {props.children}
        </CalculatorDataContext.Provider>
    );
};

