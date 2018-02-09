import React from 'react';
import ReactDom from 'react-dom';
//--------------------------------------------------
import List from './list';
//==================================================
class Comp3 extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }
    
    render() {

        return (
            <div className="comp3">
                Comp3

                <List users={ this.props.users } />
            </div>
        );
    }
};
//==================================================
export default Comp3;