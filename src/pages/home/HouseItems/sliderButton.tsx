import { memo, useEffect } from 'react';
import './index.less';

const SlideButton = memo(({ onClick, type }: { onClick: () => void; type: 'prev' | 'next' }) => {
  useEffect(() => {}, []);
  console.log(type);

  return (
    <button
      className='w-full'
      onClick={onClick}
      style={{ transform: `scale(${type === 'next' ? -1 : 1}, 1)` }}
    >
      <svg
        fill='#fff'
        xmlns='http://www.w3.org/2000/svg'
        width={40.8 * 0.6}
        height={70.7 * 0.6}
        viewBox='0 0 40.8 70.7'
      >
        <path d='M0 35.4 40.8 0v70.7z' />
      </svg>
    </button>
  );
});
export default SlideButton;
