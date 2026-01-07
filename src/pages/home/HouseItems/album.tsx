import { memo, useEffect } from 'react';
import './index.less';

const Album = memo(({ item }: { item: string }) => {
  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <div className='album'>
      <div>
        <div className='apartment-0' />
      </div>
      <div>
        <div className='apartment-0' />
      </div>
      <div>
        <div className='apartment-0' />
      </div>
    </div>
  );
});
export default Album;
