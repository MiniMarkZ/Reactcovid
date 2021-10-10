import React from "react";
import {Link} from 'react-router-dom';

function Page(){
    return(<ul>
        <li><Link to ="/">Welcome</Link></li>
        <li><Link to ="/Menu">Menu</Link></li>
    </ul>
    );
}
export default Page;