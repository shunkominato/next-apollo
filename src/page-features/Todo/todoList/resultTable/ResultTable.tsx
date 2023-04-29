import { useTodoListQuery } from '@/graphql/generated/graphql';
import { Table } from '@mantine/core';
import { FC, memo } from 'react';

export const ResultTable: FC = memo(() => {
  const { data: todoList, loading, error } = useTodoListQuery();
  console.log(todoList);
  console.log(loading);
  console.log(error);

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>todo</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {todoList?.todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.todo}</td>
            <td>{todo.todoStatusId}</td>
            <td>{todo.user.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});
