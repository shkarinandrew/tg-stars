import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import React, { FC, useCallback, useRef } from 'react';

const Clicker: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onLoad = useCallback((spline: Application) => {
    const canvas = spline.canvas;
    canvas.style.width = ref.current?.parentElement?.offsetWidth + 'px';
    canvas.style.height = ref.current?.parentElement?.offsetHeight + 'px';
  }, []);

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const { current } = ref;
    if (!current) return;

    const { left, top } = current.parentElement!.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const plusOne = document.createElement('div');
    plusOne.classList.add('count-animate');
    plusOne.textContent = '+1';
    plusOne.style.left = `${x - 10}px`;
    plusOne.style.top = `${y - 20}px`;

    current.parentElement?.appendChild(plusOne);

    setTimeout(() => {
      plusOne.remove();
    }, 1000);
  }, []);

  return (
    <Spline
      ref={ref}
      onLoad={onLoad}
      onClick={handleClick}
      className='absolute top-0 left-0 w-full h-full'
      scene='https://prod.spline.design/KPj-4BYjmccr9kB9/scene.splinecode'
    />
  );
};

export default Clicker;
