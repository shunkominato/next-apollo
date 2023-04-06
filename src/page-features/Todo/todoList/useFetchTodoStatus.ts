// import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { gql } from '@apollo/client';
import { errorHandler } from '@/util/errorHandler';
import { todoStatusApi } from './todoApi';

export const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
    }
  }
`;

export const useFetchTodoStatus = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todoStatus'],
    queryFn: todoStatusApi,
    onError: (err: AxiosError) => {
      errorHandler({ err, alertMessage: '失敗しました' });
    },
  });

  return {
    todoStatus: data?.todoStatus,
    isLoading,
    isError,
  };
};
