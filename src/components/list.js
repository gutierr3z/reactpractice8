import React from 'react';
import ReactDom from 'react-dom';
//--------------------------------------------------
import Item from './item';
//==================================================
var List = ( props ) => {

    var userItems = props.users.map( ( item ) => {
        return <Item key={ item.id } user={ item } />
    });

    return (
        <ul className="list">
            { userItems }
        </ul>
    )
}

// class List extends React.Component {

//     constructor( props ) {
//         super( props );
//         this.state = {};
//     }

//     loopItems( props ) {
//         return props.users.map( ( item ) => {
//             <li>hello</li>
//         });
//     }
    
//     render() {
//         return (
//             <ul className="list">
//                 { this.loopItem }
//             </ul>
//         );
//     }
// };
//==================================================
export default List;