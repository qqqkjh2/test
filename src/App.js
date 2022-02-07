import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import AddTodo from './AddTodo'
import React from 'react';
import { Paper, List, Container } from '@material-ui/core';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      item : [
        {id: "0", title :"Hello world", done :true},
        {id: "1", title :"안녕23", done :false}
      ]
    };
  }


  render(){
    let todoItems = this.state.item.length > 0 && (
      <Paper style={{margin:16}}>
          <List>
              {this.state.item.map((item,idx) => (
                     <Todo item={item} key={item.id} />
              ))}
          </List>
      </Paper>
    )
    
   

    return (
      <div className="App">
        <Container>
          <AddTodo/>
          <div className='TodoList'>{todoItems}</div>
        </Container>
      </div>
    );
  }


}


export default App;
