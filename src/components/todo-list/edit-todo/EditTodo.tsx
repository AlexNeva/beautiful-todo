import React, { FC, useState } from 'react';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update, onValue } from 'firebase/database';
import { EditTodoType, TodoType } from '../../../types/types';

const EditTodo: FC<EditTodoType> = ({ descr, id, edit }) => {

  const [value, setValue] = useState<string>(descr);

  const [todo, setTodo] = useState<TodoType>();

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(evt.target.value);
  }
  const submitHandler = (evt: React.FormEvent | React.ChangeEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const auth = getAuth();
    const userId = auth.currentUser?.uid;
    const db = getDatabase();

    onValue(ref(db, `users/${userId}/todos/${id}`), (snapshot) => {
      setTodo(snapshot.val())
    }, {
      onlyOnce: true
    });

    update(ref(db, `users/${userId}/todos/${id}`), { ...todo, descr: value });
    edit(false);

  }

  console.log(todo);


  return (
    <form onSubmit={submitHandler}>
      <input
        type="text" value={value}
        onChange={changeHandler}
        onBlur={submitHandler}
      />
    </form>
  )
}

export default EditTodo;
