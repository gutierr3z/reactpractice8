import React from 'react';
import ReactDom from 'react-dom';
//--------------------------------------------------
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
//==================================================
class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            users: []
        };

        var api = 'http://jsonplaceholder.typicode.com/users';

        fetch( api ).then( results => {
            return results.json();
        }).then( data => {
            this.setState( { users: data } );
            console.log( 'state: ', this.state.users );
        });
    }

    render() {
        return (
            <div className = "app">
                <Comp1 />
                <Comp2 />
                <Comp3 users={ this.state.users } />
            </div>
        );
    }
}
//==================================================
ReactDom.render( <App />, document.querySelector( '#main' ) );