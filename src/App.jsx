import React from "react";
import UseState from './components/useState.jsx';
import UseEffect from './components/useEffect.jsx';
import UseReducer from './components/useReducer.jsx';
export default class App extends React.Component{
    render() {
        return <div>
            <UseState />
            <UseEffect />
            <UseReducer />
        </div>
    }
}