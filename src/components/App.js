import React from 'react';
import ParentComponent from './ParentComponent'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>我是App首页</h1>
                <ParentComponent/>
            </div>

        );

    }
}
export default App;
