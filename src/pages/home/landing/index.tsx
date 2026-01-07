import Section from '@/components/section';
import { memo, useEffect } from 'react';
import Form from './form';
import './index.less';
import Pattern from './pattern';

const Landing = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Landing'>
      <Pattern />
      <Section>
        <Form />
      </Section>
    </div>
  );
});
export default Landing;
