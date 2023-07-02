import React, {Component}  from "react";
import './Card.css'

export default class Card extends Component{
    constructor(props){
        super(props);
}    
render(){
    const disc=this.props.discount
    return(
        <div className={disc ? 'card-pcs' : 'card-pc'} >
            <div className="img"  > <img src="https://mobreport.ru/wp-content/uploads/2021/04/1873efe40c23067206f521a9fb.jpeg" alt="" /> </div>
            <p>{this.props.prise}</p> 
            <p className="scidka" >{this.props.discount}</p>
            <p>{this.props.name}</p>
            <div className="image" ></div>
            <button  className={disc ? 'button-disc' : 'button'} >Buy</button>
        </div>
    )
}
}




