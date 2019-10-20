import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'
import jTPS from './jTPS/jTPS.js'
import SortByTask_Transaction from './SortByTask_Transaction.js';
import SortByCompleted_Transaction from './SortByCompleted_Transaction.js';
import SortByDate_Transaction from './SortByDate_Transaction.js';


const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}


class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentSort: 'ascending',
    currentList: null,
    currentItem: {
      "key": 100000000000000000000000000,
      "description": "",
      "due_date": "",
      "assigned_to": "",
      "completed": false
  },
    currentTPS: new jTPS()
  }
  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
    this.setState({currentItem: {
      "key": 100000000000000000000000000,
      "description": "",
      "due_date": "",
      "assigned_to": "",
      "completed": false
  }
});
    this.state.currentTPS.clearAllTransactions();
  }

  goItem = (key) => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    if(key < this.state.currentList.items.length)
      this.setState({currentItem: this.state.currentList.items[key]});
    else{
      var newItem = {
        "key": this.state.currentList.items.length,
        "description": "",
        "due_date": "",
        "assigned_to": "",
        "completed": false
    }
      this.setState({currentItem: newItem});
  }
  }

  addItem = (todoList) => {
    this.goItem(todoList.items.length);
  }

  sortByTask = (todoListSorted) => {
    
    if(this.state.currentSort === 'descending'){
      this.state.currentTPS.addTransaction(new SortByTask_Transaction(todoListSorted, this.state.currentSort));
      this.setState({currentSort: 'ascending'});
      this.loadList(todoListSorted);
    }
    else{
      this.state.currentTPS.addTransaction(new SortByTask_Transaction(todoListSorted, this.state.currentSort));
      this.setState({currentSort: 'descending'});
      this.loadList(todoListSorted);
    }
  }

  sortByDate = (todoListSorted) => {
    if(this.state.currentSort === 'descending'){
      this.state.currentTPS.addTransaction(new SortByDate_Transaction(todoListSorted, this.state.currentSort));
      this.setState({currentSort: 'ascending'});
      this.loadList(todoListSorted);
    }
    else{
      this.state.currentTPS.addTransaction(new SortByDate_Transaction(todoListSorted, this.state.currentSort));
      this.setState({currentSort: 'descending'});
      this.loadList(todoListSorted);
    }
  }
  sortByCompleted = (todoListSorted) => {
    if(this.state.currentSort === 'descending'){
      this.state.currentTPS.addTransaction(new SortByCompleted_Transaction(todoListSorted, this.state.currentSort));
      this.setState({currentSort: 'ascending'});
      this.loadList(todoListSorted);
    }
    else{
      this.state.currentTPS.addTransaction(new SortByCompleted_Transaction(todoListSorted, this.state.currentSort));
      this.setState({currentSort: 'descending'});
      this.loadList(todoListSorted);
    }
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    this.moveListToTop(todoListToLoad); 
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
    console.log("currentTPS: " + this.state.currentTPS);
  }
  moveListToTop(listToMove) {
    // REMOVE THE LIST IF IT EXISTS
    this.removeList(listToMove);
    // AND THEN ADD IT TO THE TOP OF THE STACK
    this.prependList(listToMove);
  }

  removeList(listToRemove) {
    // REMOVE IT IF IT EXISTS
    let indexOfList;
    for(var i = 0; i <this.state.todoLists.length; i++){
      if(this.state.todoLists[i] === listToRemove){
        indexOfList= i;
        break;
      }
    }
    
    if (indexOfList >= 0)
      this.state.todoLists.splice(indexOfList, 1);
  }

  prependList(listToPrepend) {
    this.state.todoLists.unshift(listToPrepend);
  }
  addListener =()=> {
    window.addEventListener('keydown',this.tpsListener);
  }

  tpsListener=(e)=> {
    if(this.state.currentScreen != AppScreen.HOME_SCREEN){
      if((e.key === 'z' ||e.key === 'Z') && e.ctrlKey) {
        this.state.currentTPS.undoTransaction();
        this.loadList(this.state.currentList);
    }
      else if((e.key === 'y' || e.key === 'Y') && e.ctrlKey){
        this.state.currentTPS.doTransaction();
        this.loadList(this.state.currentList);
    }
    else{}
  }
}

  render() {
    onmousemove = this.addListener;
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} 
        />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          todoLists={this.state.todoLists}
          goHome={this.goHome.bind(this)}
          goItem={this.goItem.bind(this)}
          todoList={this.state.currentList} 
          loadList={this.loadList.bind(this)}
          addItem={this.addItem.bind(this)}
          sortByTask={this.sortByTask.bind(this)}
          sortByDate={this.sortByDate.bind(this)}
          sortByCompleted={this.sortByCompleted.bind(this)}
          jsTPS={this.state.currentTPS}
          />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen
          currentScreen={this.state.currentScreen}
          todoItem={this.state.currentItem}
          loadList={this.loadList.bind(this)}
          todoList={this.state.currentList}
          jsTPS={this.state.currentTPS}
          />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;