import React from 'react';

{/* exporting class Header to "App.js" component */}
export class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>My Header in another component</h1>
            </div>
        )
    }
}