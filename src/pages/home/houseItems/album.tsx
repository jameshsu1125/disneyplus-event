import { memo, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import './index.less';

type TAlbumProps = {
  item: string;
  state: number;
  onAlbumChange: (index: number) => void;
};

const Album = memo(({ item, state, onAlbumChange }: TAlbumProps) => {
  const onClick = useCallback(
    (i: number) => {
      onAlbumChange(i);
    },
    [onAlbumChange],
  );
  return (
    <div className='album'>
      {[...new Array(5).keys()].map((i) => {
        return (
          <div key={`album-${item}-${i}`} className={twMerge(state === i ? 'hidden' : 'block')}>
            <div
              onClick={() => onClick(i)}
              className={twMerge(
                `${item}-${i}`,
                state === i ? 'opacity-100' : 'opacity-0',
                state === i ? 'animate-fadeOut' : 'animate-fadeIn',
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          </div>
        );
      })}
    </div>
  );
});
export default Album;
