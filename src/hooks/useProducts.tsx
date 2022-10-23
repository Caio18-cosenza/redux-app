import { useReducer } from 'react';

import { ItemsProps } from '../screens/home';

type ActionProps = {
  type: 'ADD' | 'CHECK' | 'REMOVE';
  item: ItemsProps;
};

const initialState: any = [];

const reducer = (state: any, action: ActionProps) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item];
    case 'CHECK':
      return state.map((item: ItemsProps) => {
        if (item.id === action.item.id) {
          return { ...item, check: !item.check };
        } else {
          return item;
        }
      });
    case 'REMOVE':
      return state.filter((item: ItemsProps) => {
        return item.id !== action.item.id;
      });
    default:
      return state;
  }
};

const useProducts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addItem = (product: string) => {
    dispatch({
      type: 'ADD',
      item: {
        id: new Date().getMilliseconds().toString(),
        title: product,
        check: false,
      },
    });
  };
  const checkItem = (id: string) => {
    dispatch({
      type: 'CHECK',
      item: {
        id,
      },
    });
  };
  const removeItem = (id: string) => {
    dispatch({
      type: 'REMOVE',
      item: {
        id,
      },
    });
  };

  return [state, addItem, checkItem, removeItem];
};

export default useProducts;
