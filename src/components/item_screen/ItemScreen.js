import React, { Component } from 'react'
import PropTypes from 'prop-types';
import EditItem_Transaction from './EditItem_Transaction';

export class ItemScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDescription: this.props.todoItem.description,
            itemAssignedTo: this.props.todoItem.assigned_to,
            itemDueDate: this.props.todoItem.due_date,
            itemCompleted: this.props.todoItem.completed,
            oldItemDescription: this.props.todoItem.description,
            oldItemAssignedTo: this.props.todoItem.assigned_to,
            oldItemDueDate: this.props.todoItem.due_date,
            oldItemCompleted: this.props.todoItem.completed,
        };
      }


    updateItemDescription = (e) =>{
       this.setState({itemDescription: e.target.value});
    }

    updateItemAssignedTo = (e) =>{
        this.setState({itemAssignedTo: e.target.value});
     }

     updateItemDueDate = (e) =>{
        this.setState({itemDueDate: e.target.value});
     }

     updateItemCompleted = (e) =>{
        this.setState({itemCompleted: e.target.checked});
     }

     updateSubmit= ()=>{
        if(this.props.todoItem.key < this.props.todoList.items.length){
            this.props.jsTPS.addTransaction(new EditItem_Transaction(this.props.todoList, this.props.todoItem, this.state.itemDescription,
                this.state.itemAssignedTo, this.state.itemDueDate, this.state.itemCompleted, this.state.oldItemDescription
                ,this.state.oldItemAssignedTo,this.state.oldItemDueDate, this.state.oldItemCompleted));
            console.log(this.props.jsTPS);
            this.props.loadList(this.props.todoList);
        }
        else{
            this.props.todoItem.description = this.state.itemDescription;
            this.props.todoItem.assigned_to = this.state.itemAssignedTo;
            this.props.todoItem.due_date = this.state.itemDueDate;
            this.props.todoItem.completed = this.state.itemCompleted;
            this.props.todoList.items.push(this.props.todoItem);
            this.props.loadList(this.props.todoList);
        }
     }

    render() {
        return (
            <div id="todo_item" >
                <h3 id="item_heading">Item</h3>
                <div id="item_form_container">
                <div id="item_description_container" className="text_toolbar">        
                    <span className="item_prompt" id="item_description_prompt">Description:</span>
                    <input type="text" className="item_input" id="item_description_textfield"
                    defaultValue={(() => {
                        if(this.props.todoItem)
                            return this.props.todoItem.description;
                        else
                            return "";
                    })()}
                    onChange ={this.updateItemDescription}
                    />
                </div>
            
                <div id="item_assigned_to_container" className="text_toolbar">        
                    <span className="item_prompt" id="item_assigned_to_prompt">Assigned To:</span>
                    <input type="text" className="item_input" id="item_assigned_to_textfield"
                    defaultValue=
                    {(() => {
                        if(this.props.todoItem)
                            return this.props.todoItem.assigned_to;
                        else
                            return "";
                    })()}
                    onChange ={this.updateItemAssignedTo}/>
                </div>
            
                <div id="item_due_date_container" className="text_toolbar">        
                    <span className="item_prompt" id="item_due_date_prompt">Due Date:</span>
                    <input type="date" className="item_input" id="item_due_date_picker"
                    defaultValue={(() => {
                        if(this.props.todoItem)
                            return this.props.todoItem.due_date;
                        else
                            return "";
                    })()}
                    onChange ={this.updateItemDueDate}/>
                </div>
                
                <div id="item_completed_container" className="text_toolbar">        
                    <span className="item_prompt" id="item_completed_prompt">Completed:</span>
                    <input type="checkbox" className="item_checkbox" id="item_completed_checkbox"
                    defaultChecked={(() => {
                        if(this.props.todoItem)
                            return this.props.todoItem.completed;
                        else
                            return false;
                    })()}
                    onChange ={this.updateItemCompleted}/>
                </div>
                
                
            </div>
                <button type="item_input" id="item_form_submit_button" onClick={this.updateSubmit}>Submit</button>
                <button type="item_input" id="item_form_cancel_button" onClick={this.props.loadList.bind(this, this.props.todoList)}>Cancel</button>
        </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
