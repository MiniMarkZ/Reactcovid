import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import 'antd/dist/antd.css';


function Page(){
    return(
    <div className="sidebar">
        <ul >
            <li><Link to ="/Test" className="Pagetext" >Test</Link></li>
            <li><Link to ="/Train" className="Pagetext">Train</Link></li>
            <li><Link to ="/Sample" className="Pagetext">sample_submission</Link></li>
            <li><Link to ="/Trainimage" className="Pagetext">train_image_level</Link></li>
            <li><Link to ="/Trainstudy" className="Pagetext">train_study_level</Link></li>
        </ul>
    </div>
    );
}
export default Page;