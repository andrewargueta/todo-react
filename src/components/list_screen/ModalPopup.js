import React, { Component } from 'react'


export class ModalPopup extends Component {
    hideDialog=()=>{
        document.getElementById('modal_yes_no_dialog').classList.remove('is_visible');
    }
    deleteList=()=>{
        let indexOfList = this.props.todoLists.indexOf(this.props.todoList);
        if (indexOfList >= 0){
        
            this.props.todoLists.splice(indexOfList, 1);
        
            for(var i = 0; i <this.props.todoLists.length ; i++){
                this.props.todoLists[i].key = i;
        }
    }
        this.props.goHome();
    }
    render() {
        return (
            <div className="modal" id="modal_yes_no_dialog" data-animation="slideInOutLeft">
            <div className="modal_dialog">
                <header className="dialog_header">
                    Delete list?
                </header>
                <section className="dialog_content">
                    <p><strong>Are you sure you want to delete this list?</strong></p>
                </section>
                    <button id="dialog_yes_button" onClick = {this.deleteList}>Yes</button>
                    <button id="dialog_no_button" onClick = {this.hideDialog} >No</button>
                <footer className="dialog_footer">
                    The list will not be retreivable.
                </footer>
            </div>
        </div>
        )
    }
}
export default ModalPopup