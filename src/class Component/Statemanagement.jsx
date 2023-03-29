import Reac,{Component} from "react"
export default class Statemanagement extends Component{
    constructor(){
        super()
       this.state={
        num:1
       }
    }
    increment(){
        this.setState({num:this.state.num+1})
    }
    decrement(){
        if(this.state.num>1)
        this.setState({num:this.state.num-1})
    }
    render(){
        return(
            <>
                <h1>Class Component</h1>
                <h2>State Management Example</h2>
                <h3>num={this.state.num}</h3>
                <button onClick={()=> this.decrement()}>Decrement</button>
                <button onClick={()=> this.increment()}>Increment</button>
            </>
        )
    }
}