class UpdateName_Transaction{
    // THIS IS THE OBJECT IT WILL MANIPULATE
    constructor(initList, initName){
        this.todoList = initList;
        this.initName = this.todoList.name;
        this.todoName = initName;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        this.todoList.name = this.todoName;
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.todoList.name = this.initName;
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "List Update Name " + this.todoList.name;
    }
}
export default UpdateName_Transaction