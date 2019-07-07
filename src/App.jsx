import React from "react";
import UseState from './components/useState.jsx';
import UseEffect from './components/useEffect.jsx';
import UseReducer from './components/useReducer.jsx';
import Context from './components/context/context.jsx';
import ContextSumer from './components/context/context-consumer.jsx';
import {ThemeContext, themes} from './components/context/theme-context.js';
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            interf:{
                theme:themes.light,
                changeStyle:()=>{
                    alert('可以改变颜色逻辑写着')
                }
            }
        };
    }
    render() {
        // 这样写容易造成每一次 Provider 重渲染时，以下的代码会重渲染所有下面的 consumers 组件
        //将 value 状态提升到父节点的 state 里：防止无谓的渲染
        // const interf = {
        //     theme:themes.light,
        //     changeStyle:()=>{
        //         alert('可以改变颜色逻辑写着')
        //     }
        // }
        return <div>
            <UseState />
            <UseEffect />
            <UseReducer />
            <ThemeContext.Provider value={this.state.interf}>
                <Context />
                <ContextSumer />
            </ThemeContext.Provider>
        </div>
    }
}