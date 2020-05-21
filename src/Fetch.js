import React from 'react'
import Bored from './Bored'

class Fetch extends React.Component{
   constructor(){
       super();
       this.state = {
           object: {}
       };
   }
   
    componentDidMount = () => {
           fetch("http://www.boredapi.com/api/activity/")
           .then(r => r.json())
           .then((fetchObject) => {
               this.setState({
                   object: fetchObject
               })
           }
           )
        }

    render(){
        return(
            <div classname="fetch-div">
                {this.state.object.activity}
               <Bored />
            </div>
        )
    };
 }
export default Fetch;