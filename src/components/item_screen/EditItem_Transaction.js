class EditItem_Transaction{
    // THIS IS THE OBJECT IT WILL MANIPULATE
    constructor(initList, initItem, itemDescription, itemAssignedTo, itemDueDate, itemCompleted, oldDescription,
        oldAssignedTo, oldDueDate, oldCompleted){
        this.todoList = initList;
        this.todoItem = initItem;
        this.initItem = initItem;
        this.todoDescription = itemDescription;
        this.todoAssignedTo = itemAssignedTo;
        this.todoDueDate = itemDueDate;
        this.todoCompleted = itemCompleted;
        this.oldDescription = oldDescription;
        this.oldAssignedTo = oldAssignedTo;
        this.oldDueDate = oldDueDate;
        this.oldCompleted = oldCompleted;

    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        if(this.todoItem.key < this.todoList.items.length){
            this.todoItem.description = this.todoDescription;
            this.todoItem.assigned_to = this.todoAssignedTo;
            this.todoItem.due_date = this.todoDueDate;
            this.todoItem.completed = this.todoCompleted;
        }
       
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.todoItem.description = this.oldDescription;
        this.todoItem.assigned_to = this.oldAssignedTo;
        this.todoItem.due_date = this.oldDueDate;
        this.todoItem.completed = this.oldCompleted;
        console.log(this.oldDescription);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "Edit Item " + this.todoItem.key;
    }
}
export default EditItem_Transaction