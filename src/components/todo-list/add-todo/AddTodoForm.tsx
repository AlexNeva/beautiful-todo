import React, { useState } from 'react';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";
import { Form, Input, Button } from 'antd';
import { TodoType } from '../../../types/types';

const AddTodoForm = () => {

  const form = Form.useForm();

  const [todo, setTodo] = useState<TodoType>({
    todoId: null,
    createdAt: null,
    completed: false,
    descr: '',
    idx: 0,
  })

  const addTodoItem = (): void => {
    const auth = getAuth();
    const userId = auth.currentUser?.uid;
    const db = getDatabase();

    const todoRef = ref(db, `users/${userId}/todos/`);
    const newTodoRef = push(todoRef);

    set(newTodoRef, {
      ...todo
    });

    form[0].resetFields();
  }

  return (
    <Form
      form={form[0]}
      name="add-todo"
      initialValues={{ remember: true }}
      layout='vertical'
      onFinish={addTodoItem}
      onValuesChange={(changedValues) => setTodo({
        ...todo,
        ...changedValues,
        todoId: Date.now(),
        createdAt: Date.now(),
      })}

    >
      <Form.Item
        label="Добавьте дело"
        name="descr"

      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddTodoForm;
