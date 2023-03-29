import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    getData(data) {
       console.log(data)
    }
    render(){
        return(
            <>
            <h1>Class Component props</h1>
            <h2>Parent Component</h2>
            <hr/>
            <Child getdata={this.getData}/>
            </>
        )
    }
}
// import React, { Component } from 'react'
// import Child from './Child'
// export default class Parent extends Component {
//     render() {
//         return (
//             <>
//             <h1>Class Component props</h1>
//             <h2>Parent Component</h2>
//             <hr/>
//             <Child name="nadeem" dsg="student" fees={126000}/>
//             </>
//         )
//     }
// }
