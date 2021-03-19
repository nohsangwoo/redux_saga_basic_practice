import React, { useEffect } from 'react';
import { createSelectorHook, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import screenfull from 'screenfull';
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from '../modules/counter';

function CounterContainer() {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  useEffect(() => {
    // console.log('작');
    // setTimeout(() => {
    //   window.scrollTo(0, 30);
    // }, 1000);
    const whatDevice = (function checkMobile() {
      var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

      if (varUA.indexOf('android') > -1) {
        //안드로이드
        return 'android';
      } else if (
        varUA.indexOf('iphone') > -1 ||
        varUA.indexOf('ipad') > -1 ||
        varUA.indexOf('ipod') > -1
      ) {
        //IOS
        return 'ios';
      } else {
        //아이폰, 안드로이드 외
        return 'other';
      }
    })();
    console.log(whatDevice);
    return () => {};
  }, []);

  useEffect(() => {
    let cleanUp = false;
    console.log(screenfull.isFullscreen);
    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        console.log(
          'Am i full screen?',
          screenfull.isFullscreen ? 'yes' : 'no'
        );
      });
    }
    return () => {
      cleanUp = true;
    };
  });

  const toggleFullScreen = () => {
    screenfull.toggle();
  };
  return (
    <>
      <div>sadfasdf</div>
      <button onClick={toggleFullScreen}>Toggle FullScreen button</button>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </>
  );
}

export default CounterContainer;
