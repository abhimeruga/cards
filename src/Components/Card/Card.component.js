import React, { Component } from 'react'
import './Card.styles.css'
import { connect, useDispatch, useSelector } from "react-redux";

export class Card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             description:'',
             comments : []
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    addComment= () => {
        if(this.state.description !== '') {
            let comments = [...this.state.comments , this.state.description]
            comments = Array.from(new Set(comments))
            this.setState(
                ()=>({
                    comments: comments
                })
            )
        }
    }
    // dispatch = useDispatch();
    // stateValue = useSelector(state=>state)
    addCard = () => {
        // this.dispatch({ type: 'add',
        //                 payload: this.state })
        //                 console.log(this.stateValue);
        this.props.dispatch();
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-title">
                    <h1 >{this.state.title}</h1>
                    <input className="input" type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange}/>
                </div>
                <div className="card-title">
                    <textarea className="text-area" placeholder = "Description" name="description" value={this.state.description} onChange={this.handleChange} />
                </div>
                <div className="card-add-comment">
                    <button className="card-add-button" onClick={this.addComment}> Add comment </button>
                    <button className="card-add-button" onClick={this.addCard}> Add Card </button>
                </div>
                <div className="card-title comments">
                    {this.state.comments.map(comment=> <>
                    <li className="comment" key={comment}>{comment} <span className="date"> { new Date().toDateString() }</span></li> 
                        </>
                    )}
                </div>
                
            </div>
        )
    }

    mapStateToDispatch = (dispatch) => {
        return {
         dispatch : () => {
             const obj = {
                 type: 'add',
                 payload: this.state
               
             }
             return dispatch(obj)
         }
        }
     }
}




export default Card
