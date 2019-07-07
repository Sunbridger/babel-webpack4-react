import React from 'react';
import { ThemeContext } from './theme-context.js';
export default class ThemedButton extends React.Component {
    render() {
      let { theme,changeStyle } = this.context;
      return (
        <div>
          <button onClick={changeStyle} style={{backgroundColor: theme.background}}>按钮.contextType</button>
        </div>
      );
    }
}
ThemedButton.contextType = ThemeContext;
