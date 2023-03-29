import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <>
                <h2>Child Component</h2>
                <button onClick={()=>{
                this.props.getData({
                  id:1001,
                  name:"nadeem", 
                  dsg:"student",
                  city:"saharanpur",
                  state:"UP"
                })
                }}>Click to send data from child to parent</button>
            </>
        )
    }
}




// import React, { Component } from 'react'

// export default class Child extends Component {
//     render() {
//         return (
//             <>
//                 <h2>Child Component</h2>
//                 <h3>name:{this.props.name}</h3>
//                 <h3>dsg:{this.props.dsg}</h3>
//                 <h3>fees:{this.props.fees}</h3>
//             </>
//         )
//     }
// }


