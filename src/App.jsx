import React from "react";
import UseState from './components/useState.jsx';
import UseEffect from './components/useEffect.jsx';
import UseReducer from './components/useReducer.jsx';

import Context from './components/context/context.jsx';
import ContextSumer from './components/context/context-consumer.jsx';
import {ThemeContext, themes} from './components/context/theme-context.js';
export default class App extends React.Component{
    render() {
        const interf = {
            theme:themes.light,
            changeStyle:()=>{
                alert('可以改变颜色逻辑写着')
            }
        }
        return <div>
            <UseState />
            <UseEffect />
            <UseReducer />
            <ThemeContext.Provider value={interf}>
                <Context />
                <ContextSumer />
            </ThemeContext.Provider>
        </div>
    }
}