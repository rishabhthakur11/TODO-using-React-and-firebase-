import { List, ListItem, ListItemAvatar, ListItemText,} from "@material-ui/core";
import React from "react";
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dedline time ⏰" />
      </ListItem>
      <DeleteForeverIcon
      onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
      
    </List>
  );
}

export default Todo;
