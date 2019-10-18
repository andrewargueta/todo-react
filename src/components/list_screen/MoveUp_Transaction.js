class MoveUp_Transaction{
    // THIS IS THE OBJECT IT WILL MANIPULATE
    constructor(initList, initIndex){
        this.todoList = initList;
        this.initList = this.todoList;
        this.todoIndex = initIndex;
        this.initIndex = initIndex;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        let copyItems = this.todoList.items;
        let tempItem = this.todoList.items[this.todoIndex-1];
        let itemSwap = this.todoList.items[this.todoIndex];
        itemSwap.key = tempItem.key;
        let newKey = parseInt(tempItem.key);
        newKey +=1;
        tempItem.key = newKey;
        this.todoList.items[this.todoIndex-1] = this.todoList.items[this.todoIndex];
        this.todoList.items[this.todoIndex] = tempItem;
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        let tempItem = this.todoList.items[this.todoIndex-1];
        let itemSwap = this.todoList.items[this.todoIndex];
        itemSwap.key = tempItem.key;
        let newKey = parseInt(tempItem.key);
        newKey +=1;
        tempItem.key = newKey;
        this.todoList.items[this.todoIndex-1] = this.todoList.items[this.todoIndex];
        this.todoList.items[this.todoIndex] = tempItem;

    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "Move Up " + this.todoIndex;
    }
}
export default MoveUp_Transaction