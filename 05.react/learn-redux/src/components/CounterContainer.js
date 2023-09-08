import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';
import Counter from './Counter';

function CounterContainer(props) {
    //number, diff 
    //useSelector(state => state)
    const {number, diff} = useSelector(state=> ({
        number: state.counter.number,
        diff: state.counter.diff
    }));
    //useDispatch() 리덕스 스토어의 dispatch를 함수에서
    //사용 할수 있게 해준다. 
    const dispatch = useDispatch();
    //각 액션을 디스패치 하는 함수 dispatch({type: INCREASE}) 와 같은 기능이다.
    //increase
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    return (
       <Counter number={number}
       diff={diff}
       onDecrease={onDecrease}
       onIncrease={onIncrease}
       onSetDiff={onSetDiff}
       />
    );
}

export default CounterContainer;