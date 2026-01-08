import Section from '@/components/section';
import { memo } from 'react';
import './index.less';
import Item from './item';

const HouseItems = memo(() => {
  return (
    <Section>
      <div className='HouseItems'>
        <div id='tips' className='tips' />
        <Item item='apartment' />
        <Item item='house' />
      </div>
    </Section>
  );
});
export default HouseItems;
