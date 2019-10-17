import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import MoveUp_Transaction from './MoveUp_Transaction'

export class ListItemsTable extends Component {
    moveUp =(index, e)=>{
        e.stopPropagation();
        this.props.jTPS.addTransaction(new MoveUp_Transaction(this.props.todoList, index));
        console.log(this.props.jTPS);
        this.props.loadList(this.props.todoList);
        
        
    }
    moveDown =(index, e)=>{
        e.stopPropagation();
        let listBeingEdited = this.props.todoList;
        let tempItem = listBeingEdited.items[index+1];
        let itemSwap = listBeingEdited.items[index];
        itemSwap.key = tempItem.key;
        let newKey = parseInt(tempItem.key);
        newKey -=1;
        tempItem.key = newKey;
        listBeingEdited.items[index+1] = listBeingEdited.items[index];
        listBeingEdited.items[index] = tempItem;
        this.props.loadList(this.props.todoList);
    }
    doNothing = (e) =>{
        e.stopPropagation();
    }
    deleteItem = (index, e) => {
        e.stopPropagation();
        this.props.todoList.items.splice(index, 1);
        this.props.loadList(this.props.todoList);
        for(let i = 0; i < this.props.todoList.items.length; i++){
            this.props.todoList.items[i].key = i;
        }
    }



    render() {
        return (
            <div id="list_items_container">
                <div className="list_item_header_card">
                <div className="list_item_task_header" onClick={this.props.sortByTask.bind(this, this.props.todoList)}>Task</div>
                <div className="list_item_due_date_header" onClick={this.props.sortByDate.bind(this, this.props.todoList)}>Due Date</div>
                <div className="list_item_status_header"onClick={this.props.sortByCompleted.bind(this, this.props.todoList)}>Status</div>
                </div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem}
                            goItem={this.props.goItem} 
                            todoList={this.props.todoList}
                            moveUp={this.moveUp}
                            moveDown={this.moveDown}
                            doNothing={this.doNothing}
                            deleteItem={this.deleteItem}
                            />
                    ))
                
                }
                <div className="list_item_add_card" onClick={this.props.addItem.bind(this, this.props.todoList)}>+</div>
            </div>
            
        )
    }
}

export default ListItemsTable
