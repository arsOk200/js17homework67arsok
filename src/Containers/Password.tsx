import React from 'react';
import './Password.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {increment, decrement, decreaseBy, increaseBy} from "./PasswordSlice";

const Password = () => {
  const dispatch = useDispatch();
  const passwordValue = useSelector((state:RootState) => state.password.value.replace(/\d/g,'*'));
  const Right = useSelector((state:RootState) => state.password.isRight);

  return (
    <div className='password'>
        {Right ? <div className='text success'>Access Granted</div> : (<div className='text false'>Access Denied</div>)}
      <div className='area'>
        {passwordValue}
      </div>
      <div className="blocks">
        <div  className='block'>
          <span className='number' onClick={() => dispatch(increment('1'))}>1</span>
          <span className='number' onClick={() => dispatch(increment('2'))}>2</span>
          <span className='number' onClick={() => dispatch(increment('3'))}>3</span>
        </div>

        <div className='block'>
          <span className='number' onClick={() => dispatch(increment('4'))}>4</span>
          <span className='number' onClick={() => dispatch(increment('5'))}>5</span>
          <span className='number' onClick={() => dispatch(increment('6'))}>6</span>
        </div>

        <div className='block'>
          <span className='number' onClick={() => dispatch(increment('7'))}>7</span>
          <span className='number' onClick={() => dispatch(increment('8'))}>8</span>
          <span className='number' onClick={() => dispatch(increment('9'))}>9</span>
        </div>

        <div className='block'>
          <span className='number btn' onClick={() => dispatch(decrement())}>C</span>
          <span className='number' onClick={() => dispatch(increment('0'))}>0</span>
          <span className='number btn' onClick={() => dispatch(decreaseBy())}> {'<'} </span>
        </div>

        <div className="block">
          <span className="number btn check" onClick={() => dispatch(increaseBy())}>E</span>
        </div>
      </div>


    </div>
  );
};

export default Password;