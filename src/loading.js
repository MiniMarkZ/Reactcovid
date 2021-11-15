import React from 'react'
import './loading.css';

function Loading() {
        return (
            <div clas="load"style={{marginLeft:'60vh',marginRight:'auto',paddingTop:"35vh"}}>
              <meta charSet="UTF-8" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
              <link rel="stylesheet" href="./style.css" />
              {/* partial:index.partial.html */}
              <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="path" fill="none" strokeWidth={6} strokeLinecap="round" cx={33} cy={33} r={30} />
              </svg>
                {console.log("ok")}
            </div>
          );
}

export default Loading
