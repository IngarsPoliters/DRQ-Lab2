import React from 'react';

{/* exporting class Header to "App.js" component */}
export class Content extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                {/* displays the current date & time */}
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    }
}