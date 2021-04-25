import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { decrement, increment} from './testReduser';



export default function Sandbox() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.test.data)

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(10))}
        color='green'
        content='INCREMENT'
      />
      <Button
        onClick={() => dispatch(decrement(5))}
        color='red'
        content='DNCREMENT'
      />
    </>
  );
}