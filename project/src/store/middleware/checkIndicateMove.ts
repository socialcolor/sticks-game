import { isAction, Middleware } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import rootReducer  from '../rootReducer';

type Reducer = ReturnType<typeof rootReducer>;

const checkIndicateMoveMiddleware: Middleware<unknown, Reducer> = (store) => (next) => (action) => {
    const state = store.getState();
    if (isAction(action) && action.type === 'sticks/makeToMoveAction' && !state.sticksSlice.trash.sticks.length) {
      toast.error('Чтобы сделать ход, перетащите стики в блок выше');
      return; 
    }
  
    const result = next(action);
    
    return result;
  };

export default checkIndicateMoveMiddleware;
