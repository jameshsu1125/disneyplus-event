import { memo, useEffect } from 'react';
import './index.less';
import Section from '@/components/section';
import Title from './title';

const TeamIntroduction = memo(() => {
  useEffect(() => {}, []);
  return (
    <Section>
      <div className='TeamIntroduction'>
        <Title name='actor' />
        <div className='row'>
          <div className=''> </div>
        </div>
      </div>
    </Section>
  );
});
export default TeamIntroduction;
