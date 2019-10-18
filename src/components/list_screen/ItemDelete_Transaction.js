class ItemDelete_Transaction{
    // THIS IS THE OBJECT IT WILL MANIPULATE
    constructor(initList, initIndex){
        this.todoList = initList;
        this.initList = initList;
        this.todoIndex = initIndex;
        this.todoItem = this.todoList.items[this.todoIndex];
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        this.todoList.items.splice(this.todoIndex, 1);
        for(let i = 0; i < this.todoList.items.length; i++){
            this.todoList.items[i].key = i;
        }
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.todoList.items.splice(this.todoIndex, 0, this.todoItem );
        for(let i = 0; i < this.todoList.items.length; i++){
            this.todoList.items[i].key = i;
        }
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "Delete Item " + this.todoIndex;
    }
}
export default ItemDelete_Transaction