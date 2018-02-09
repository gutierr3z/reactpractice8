import React from 'react';
import ReactDom from 'react-dom';
//--------------------------------------------------

//==================================================
var Item = ( props ) => {

    var name = props.user.name;
    var phone = props.user.phone;

    return (
        <li>
            { name }<br />
            { phone }
        </li>
    );
};
//==================================================
export default Item;