class UpdateOwner_Transaction{
    // THIS IS THE OBJECT IT WILL MANIPULATE
    constructor(initList, initOwner){
        this.todoList = initList;
        this.initOwner = this.todoList.owner;
        this.todoOwner = initOwner;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        this.todoList.owner = this.todoOwner;
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.todoList.owner = this.initOwner;
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "List Update Owner " + this.todoList.owner;
    }
}
export default UpdateOwner_Transaction