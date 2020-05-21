import React from 'react'
import Bored from './Bored'

class Fetch extends React.Component{
   constructor(){
       super();
       this.state = {
           object: {},
           listedData: []
       };
   }
   
    componentDidMount = () => {
        fetch("http://www.boredapi.com/api/activity?type=recreational")
           .then(r => r.json())
           .then((fetchObject) => {
               this.setState({
                   object: fetchObject
               })
           }
           )
        }

    newFetch = () => { 
        let fetchData = { object: this.state.object }
        console.log(fetchData)
        let dataArray = this.state.listedData.concat(fetchData)
            fetch("http://www.boredapi.com/api/activity?type=recreational")
                .then(r => r.json())
                    .then((fetchObject) => {
                        this.setState({
                            object: fetchObject,
                            listedData: dataArray
                        })
                    }
            )
    }

    listOfActivities = () => {
     
        return this.state.listedData.map(data => {
            return <div><span>{data.object.activity}</span> </div>
        })
    }

    render(){
        return(
            <div classname="fetch-div">

               
               <button onClick={this.newFetch}>Do Something New</button>
                <Bored
                    fetchActivity={this.state.object.activity}
                    fetchType={this.state.object.type}
                    
                />
               {this.listOfActivities()}
            </div>
        )
    };
 }
export default Fetch;