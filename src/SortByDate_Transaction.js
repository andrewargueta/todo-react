class SortByDate_Transaction{
    // THIS IS THE OBJECT IT WILL MANIPULATE
    constructor(initList, initSort){
        this.todoList = initList;
        this.todoSort = initSort;
        this.redoItems =   this.todoList.items;
        this.initItems =  this.todoList.items.slice();
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        this.todoList.items = this.redoItems;
        if(this.todoSort === 'descending'){
            this.todoList.items.sort((a, b) => (a.due_date < b.due_date) ? 1 : -1);
            for(let i = 0; i < this.todoList.items.length; i++){
                this.todoList.items[i].key = i;
            }
        }
        else{
            this.todoList.items.sort((a, b) => (a.due_date > b.due_date) ? 1 : -1)
            for(let i = 0; i < this.todoList.items.length; i++){
                this.todoList.items[i].key = i;
            }
        }

    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.todoList.items = this.initItems;
        this.initList = this.redoItems;
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
        return "Sort by Due Date List " + this.todoList.name;
    }
}
export default SortByDate_Transaction