import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import MoveUp_Transaction from './MoveUp_Transaction'
import MoveDown_Transaction from './MoveDown_Transaction'
import ItemDelete_Transaction from './ItemDelete_Transaction'

export class ListItemsTable extends Component {
    moveUp =(index, e)=>{
        e.stopPropagation();
        this.props.jsTPS.addTransaction(new MoveUp_Transaction(this.props.todoList, index));
        console.log(this.props.jsTPS);
        this.props.loadList(this.props.todoList);
        
        
    }
    moveDown =(index, e)=>{
        e.stopPropagation();
        this.props.jsTPS.addTransaction(new MoveDown_Transaction(this.props.todoList, index));
        console.log(this.props.jsTPS);
        this.props.loadList(this.props.todoList);
    }
    doNothing = (e) =>{
        e.stopPropagation();
    }
    deleteItem = (index, e) => {
        e.stopPropagation();
        this.props.jsTPS.addTransaction(new ItemDelete_Transaction(this.props.todoList, index));
        console.log(this.props.jsTPS);
        this.props.loadList(this.props.todoList);
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
