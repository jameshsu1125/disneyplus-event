import { memo } from 'react';
import './index.less';

const User = memo(({ data }: { data: { photo: string; name: string; description: string } }) => {
  return (
    <div className='User'>
      <div className='photo'>
        <div className={`${data.photo}`}></div>
      </div>
      <div className='name'>{data.name}</div>
      <div className='description'>{data.description}</div>
    </div>
  );
});
export default User;
