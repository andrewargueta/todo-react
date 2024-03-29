import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import ModalPopup from './ModalPopup'
import UpdateName_Transaction from './UpdateName_Transaction'
import UpdateOwner_Transaction from './UpdateOwner_Transaction'


export class ListScreen extends Component {
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return owner;
        }
    }
    updateListName =(e)=> {
        this.props.jsTPS.addTransaction(new UpdateName_Transaction(this.props.todoList, e.target.value));
      }
    updateListOwner =(e)=> {
        this.props.jsTPS.addTransaction(new UpdateOwner_Transaction(this.props.todoList, e.target.value));
    }
    

    render() {
        return (
            <div id="todo_list" onMouseMove={this.addListener}>
                <ListHeading goHome={this.props.goHome} />
                <ListTrash />
                <ModalPopup 
                    todoLists={this.props.todoLists}
                    todoList={this.props.todoList}
                    goHome={this.props.goHome}/>
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            defaultValue={this.getListName()} 
                            type="text" 
                            id="list_name_textfield"
                            onChange={this.updateListName}
                                />
                    </div>
                    
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield"
                            onChange={this.updateListOwner} />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList}
                                goItem={this.props.goItem}
                                addItem={this.props.addItem}
                                loadList={this.props.loadList.bind(this)}
                                sortByTask={this.props.sortByTask}
                                sortByDate={this.props.sortByDate}
                                sortByCompleted={this.props.sortByCompleted}
                                moveUp={this.props.moveUp}
                                jsTPS={this.props.jsTPS}
                                />         
            </div>
        )
    }
}

export default ListScreen
