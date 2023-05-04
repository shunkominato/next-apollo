import { useTodoListQuery } from '@/graphql/generated/graphql';
import { Table } from '@mantine/core';
import { FC, memo } from 'react';

export const ResultTable: FC = memo(() => {
  const [res] = useTodoListQuery();
  const { data, error, fetching } = res;
  if (!data) {
    return <p>Error Occurred</p>;
  }

  const todoList = data.todos;

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
        {todoList.map((todo) => (
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
