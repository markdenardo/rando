import React from 'react'

class Bored extends React.Component{

    render() {
         
        return (
            <div classname="bored-div" >            
                    <div>
                   
                    {this.props.fetchActivity}
                   
                    </div>       
               
            </div>
        )
    }
}

export default Bored;