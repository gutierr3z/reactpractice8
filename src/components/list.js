import React from 'react';
import ReactDom from 'react-dom';
//--------------------------------------------------
import Item from './item';
//==================================================
// var List = ( props ) => {

//     //loop
//     var userItems = props.users.map( ( item ) => {
//         return <Item key={ item.id } user={ item } />
//     });

//     return (
//         <ul className="list">
//             { userItems }
//         </ul>
//     );
// };

class List extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }
    
    render() {

        return (
            <ul className="list">
                { 
                    this.props.users.map( ( item ) => {
                        return <Item key={ item.id } user={ item } />
                    })
                }
            </ul>
        );
    }
};
//==================================================
export default List;