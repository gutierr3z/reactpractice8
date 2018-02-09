import React from 'react';
import ReactDom from 'react-dom';
//--------------------------------------------------

//==================================================
class Comp2 extends React.Component {
    
    constructor( props ) {
        super( props );
        this.state = {
            counter: 0
        };
    }

    clicker( e ) {
        this.setState( { counter: this.state.counter + 1 } );
    }

    render() {

        return (
            <div className = "comp2">
                <h4>Comp2 : { this.state.counter }</h4>
                <input type="button" value="click" onClick = { this.clicker.bind( this ) } />
            </div>
        );
    }
};
//==================================================
export default Comp2;