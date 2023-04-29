import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
  users: Array<User>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  todo: Scalars['String'];
  todoStatusId: Scalars['String'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TodoListQueryVariables = Exact<{ [key: string]: never; }>;


export type TodoListQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, todo: string, todoStatusId: string, user: { __typename?: 'User', id: string, name: string } }> };


export const TodoListDocument = gql`
    query todoList {
  todos {
    id
    todo
    todoStatusId
    user {
      id
      name
    }
  }
}
    `;

/**
 * __useTodoListQuery__
 *
 * To run a query within a React component, call `useTodoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodoListQuery(baseOptions?: Apollo.QueryHookOptions<TodoListQuery, TodoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodoListQuery, TodoListQueryVariables>(TodoListDocument, options);
      }
export function useTodoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodoListQuery, TodoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodoListQuery, TodoListQueryVariables>(TodoListDocument, options);
        }
export type TodoListQueryHookResult = ReturnType<typeof useTodoListQuery>;
export type TodoListLazyQueryHookResult = ReturnType<typeof useTodoListLazyQuery>;
export type TodoListQueryResult = Apollo.QueryResult<TodoListQuery, TodoListQueryVariables>;