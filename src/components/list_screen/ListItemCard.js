import React, { Component } from 'react'

export class ListItemCard extends Component {
    render() {
        return (
            <div className='list_item_card' onClick={this.props.goItem.bind(this, this.props.listItem.key)} 
            id={'item_card_'+this.props.listItem.key}>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className='list_item_card_completed'>
                {(() => {
                    switch (this.props.listItem.completed) {
                    case true:    return "Completed";
                    case false:   return "";
                    default:      return "Error";
                    }
                })()}
                </div>
                <div className='list_item_card_not_completed'>
                {(() => {
                    switch (this.props.listItem.completed) {
                    case true:    return "";
                    case false:   return "Pending";
                    default:      return "Error";
                    }
                })()}
                </div>
                <div className="list_item_card_toolbar">
                    <div id={"item_card_"+this.props.listItem.key+"_up"} 
                    onClick ={(() => {
                        if(this.props.listItem.key === 0)
                            return this.props.doNothing.bind(this);
                        else
                            return this.props.moveUp.bind(this, this.props.listItem.key);} 
                    )()}
                    className =  {(() => {
                        if(this.props.listItem.key === 0)
                            return "list_item_card_up disabled";
                        else
                            return "list_item_card_up";
                    })()}>&#x21e7;</div>


                    <div className="list_item_card_down" id={"item_card_"+this.props.listItem.key+"_down"} 
                
                    onClick ={(() => {
                        if(this.props.listItem.key === (this.props.todoList.items.length-1))
                            return this.props.doNothing.bind(this);
                        else
                            return this.props.moveDown.bind(this,this.props.listItem.key);
                        })()}

                    className =  {(() => {
                        if(this.props.listItem.key === (this.props.todoList.items.length-1))
                            return "list_item_card_down disabled";
                        else
                            return "list_item_card_down";
                    })()}
                    >&#x21e9;</div>
                    <div className="list_item_card_delete" id={"item_card_"+this.props.listItem.key+"_delete"}
                    onClick={this.props.deleteItem.bind(this, this.props.listItem.key)}>&#10005;</div>
                
                </div>
                
            </div>
            
        )
    }
}

export default ListItemCard
