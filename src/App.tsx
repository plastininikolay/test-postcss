import React from 'react';
import logo from './logo.svg';
import Card from "./components/card";
import ProgressBar from "./components/ProgressBar";

function App() {
    return (
        <div className="App">
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
            <ProgressBar/>
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
}

export default App;
