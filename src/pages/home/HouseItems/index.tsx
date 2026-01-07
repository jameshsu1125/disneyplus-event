import Section from '@/components/section';
import { memo, useEffect } from 'react';
import './index.less';
import Item from './item';

const HouseItems = memo(() => {
  useEffect(() => {}, []);
  return (
    <Section>
      <div className='HouseItems'>
        <div className='tips' />
        <Item item='apartment' />
        <Item item='house' />
      </div>
    </Section>
  );
});
export default HouseItems;
