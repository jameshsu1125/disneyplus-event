import { memo } from 'react';

const Title = memo(({ name }: { name: string }) => (
  <div className='title'>
    <div className={`${name}`} />
  </div>
));
export default Title;
