import React, { Component } from 'react'
import './CardList.styles.css'

export class CardList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[{
                title:'title 1',
                description:'description',
                comments : [1,2,3,4,5,6,7,8,9]
            },
            {
                title:'title 2',
                description:'description',
                comments : [1,2,3,4,5,6,7,8,9]
            },
            {
                title:'title 3',
                description:'description',
                comments : [1,2,3,4,5,6,7,8,9]
            }]
        }
    }
    addCard = () => {
        console.log(this.props)
        this.props.props.history.push('/card')
    }
    
    render() {
        return (
            <div className="card-list" >
                <button className="delete"> Delete List </button>
                {
                    this.state.list.map(l=>
                        <div className="card-list-card">
                            <h2 className="card-list-title">{l.title}</h2>
                            {l.comments.map(comment=>
                                <li className="comments">{comment}</li>
                            )}
                        </div>
                    )
                }
                <button className="add" onClick={this.addCard}> Add card </button>
            </div>
        )
    }
}

export default CardList
