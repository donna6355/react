import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovie from './SearchMovie'

class Main extends Component {
    render(){
        return(
            <div className="container">
                <h1 className="title">React Movie Search</h1>
                <SearchMovie />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));