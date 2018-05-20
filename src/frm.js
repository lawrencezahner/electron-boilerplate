import './frm.scss'

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
            <div className="jumbotron">
                <form>
                    <input className="form-control" placeholder="filename" />
                </form>
            </div>
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)