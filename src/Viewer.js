import React from 'react';
import Fetch from  './Fetch'

class Viewer extends React.Component {

    render(){
        return(
            <div classname="viewer-div">
                <Fetch />
            </div>
        )
    }
}

export default Viewer;