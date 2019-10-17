import React, { Component } from 'react'
export class ListTrash extends Component {
    showDialog =()=>{
        document.getElementById('modal_yes_no_dialog').classList.add('is_visible');
    }
    render() {
        return (
            <div id="list_trash" onClick = {this.showDialog}>&#128465;</div>
        )
    }
}

export default ListTrash
