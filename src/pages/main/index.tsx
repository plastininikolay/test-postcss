import React from 'react';
import logo from "../../logo.svg";
import Card from "../../components/Card";
import { createUseStyles } from "react-jss";
import {CustomTheme} from "../../App";

type ButtonRuleNames = 'myButton' | 'myLabel'

interface PropsButton {
    children?: React.ReactNode
    padding: string
}

const MainPage = () => {

    const useStyles = createUseStyles<ButtonRuleNames, PropsButton, CustomTheme>({
        myButton: {
            color: "red",
            padding: (props) => props.padding,
            '& span': {
                // jss-plugin-nested applies this to a child span
                fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
            }
        },
        myLabel: {
            fontStyle: 'italic'
        }
    })
    const Button = ({children, ...props}: PropsButton) => {
        const classes = useStyles(props)
        return (
            <button className={classes.myButton}>
                <span className={classes.myLabel}>{children}</span>
            </button>
        )
    }
    return (
        <div className="App">
            <Button padding="30px">11 111 </Button>
            <Button padding="60px">qwerty</Button>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div className="test">
                <input type="text" placeholder="123123123"/>
                <p>HELLOOOO WOrLD</p>
            </div>
            <div className="grid">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <ul>
                <li>1
                    <li>2</li>

                </li>
                <li>1
                    <li>2</li>

                </li>
                <li>1
                    <li>2</li>

                </li>
                <li>1
                    <li>2</li>

                </li>

            </ul>
            <ul>
                <div>222222</div>
            </ul>
        </div>
    );
};

export default MainPage;