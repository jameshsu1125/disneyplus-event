import { memo, useEffect } from 'react';
import Form from './form';
import './index.less';
import Pattern from './pattern';

const Landing = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Landing'>
      <Pattern />
      <Form />
    </div>
  );
});
export default Landing;
