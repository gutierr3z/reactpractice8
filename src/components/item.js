import React from 'react';
import ReactDom from 'react-dom';
//--------------------------------------------------

//==================================================
var Item = ( props ) => {
    return (
        <li>
            { props.user.name }<br />
            { props.user.phone }
        </li>
    );
};
//==================================================
export default Item;