import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import tapAudio from '../../assets/audio/tap.mp3';
import {
  useAudio,
  useClicker,
  useDebounce,
  useHapticFeedback,
  useProfileMutation,
  useProfileQuery,
  useVibration,
} from '../../hooks';
import { DEFAULT_REQUEST_API } from '../../services';

const Clicker: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(0);
  const debounce = useDebounce(count, 1000);
  const { updateEnergy, updateBalance } = useClicker();

  const queryClient = useQueryClient();

  const { data } = useProfileQuery();
  const { mutate } = useProfileMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      setCount(0);
    },
  });

  useEffect(() => {
    if (debounce) {
      mutate({ ...DEFAULT_REQUEST_API, energy_spent: debounce as number });
    }
  }, [debounce, mutate]);

  const { isPlaying } = useAudio();
  const { isVibration } = useVibration();

  const playAudio = useCallback(() => {
    new Audio(tapAudio).play();
  }, []);

  const { impactOccurred } = useHapticFeedback();

  const onLoad = useCallback((spline: Application) => {
    const canvas = spline.canvas;
    canvas.style.width = ref.current?.parentElement?.offsetWidth + 'px';
    canvas.style.height = ref.current?.parentElement?.offsetHeight + 'px';
  }, []);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { current } = ref;
      if (!current) return;

      if (isPlaying) {
        playAudio();
      }

      if (isVibration) {
        impactOccurred('heavy');
      }

      const { left, top } = current.parentElement!.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;

      const plusOne = document.createElement('div');
      plusOne.classList.add('count-animate');
      plusOne.textContent = `+${data?.tap_reward || 1}`;
      plusOne.style.left = `${x - 10}px`;
      plusOne.style.top = `${y - 20}px`;

      current.parentElement?.appendChild(plusOne);
      setCount((prev) => prev + 1);
      updateEnergy((prev) => prev - 1);
      updateBalance((prev) => prev + (data?.tap_reward || 1));

      setTimeout(() => {
        plusOne.remove();
      }, 1000);
    },
    [
      isPlaying,
      isVibration,
      data?.tap_reward,
      updateEnergy,
      updateBalance,
      playAudio,
      impactOccurred,
    ],
  );

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
