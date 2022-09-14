import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemeButton from './themed-button';

function Toolbar(props) {
    return (
        <ThemeButton onClick={props.changeTheme}>Change Theme</ThemeButton>
    )
}

class App extends React.Component {
    state = {
        theme: themes.light
    }
    
    toggleTheme = () => {
        this.setState(state => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark
        }))
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <div>
                    <ThemeButton />
                </div>
            </div>
        )
    }
}

export default App;