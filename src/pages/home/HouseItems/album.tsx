import { memo } from 'react';
import './index.less';
import { twMerge } from 'tailwind-merge';

type TAlbumProps = {
  item: string;
  state: number;
  onAlbumChange: (index: number) => void;
};

const Album = memo(({ item, state, onAlbumChange }: TAlbumProps) => (
  <div className='album'>
    {[...new Array(4).keys()].map((i) => (
      <div key={`album-${item}-${i}`}>
        <div
          className={twMerge(
            `${item}-${i}`,
            state === i ? 'opacity-100' : 'cursor-pointer opacity-0',
            state === i ? 'animate-fadeOut' : 'animate-fadeIn',
          )}
          style={{ animationDelay: `${i * 0.1}s` }}
          onClick={() => onAlbumChange(i)}
        />
      </div>
    ))}
  </div>
));
export default Album;
