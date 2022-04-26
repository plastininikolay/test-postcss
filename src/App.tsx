import React from 'react';
import MainPage from "./pages/main";
import {createUseStyles, ThemeProvider, useTheme} from "react-jss";

type RuleNames = 'myButton' | 'myLabel'

interface ButtonProps {
    children?: React.ReactNode
    spacing?: number
    fontWeight?: string
    labelColor?: string
}

export interface CustomTheme {
    background: string
}

const useStyles = createUseStyles<RuleNames, ButtonProps, CustomTheme>({
    myButton: {
        padding: ({spacing}) => spacing || 10
    },
    myLabel: ({theme, ...props}) => ({
        display: 'block',
        color: props.labelColor || 'red',
        fontWeight: props.fontWeight || 'bold',
        backgroundColor: theme.background || 'gray'
    })
})

function Button({children, ...props}: ButtonProps): React.ReactElement {
    const theme = useTheme<CustomTheme>()
    const classes = useStyles({...props, theme})

    return (
        <button className={classes.myButton}>
            <span className={classes.myLabel}>{children}</span>
        </button>
    )
}

// Create App
const theme = {background: 'black'}

function App(): React.ReactElement {
    return (
        <ThemeProvider theme={theme}>
            <Button fontWeight="bold">Submit</Button>
            <MainPage/>
        </ThemeProvider>
    )
}
export default App;
