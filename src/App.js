import "./App.css";
import React, { useState,useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //when the app loads,we need to listen to the database and fetch new todos as they get added/removed
  useEffect(()=>{
    //this code here....fires when the app.js load
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })
  },[])
  const addTood = (event) => {
    //this will fire of when we click the button
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
   // setTodos([...todos, input]);
    setInput(""); //clear up the inputs
  };
  return (
    <div className="App">
      <h1>Hello Hustlers 😊</h1>
      <form>
        <FormControl>
          <InputLabel>☑️Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTood}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTood}>
          Add Todo
        </button> */}
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
