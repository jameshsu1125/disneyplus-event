import { memo, useEffect } from 'react';
import './index.less';
import Section from '@/components/section';

const KeyVisual = memo(() => {
  useEffect(() => {}, []);

  return (
    <Section widthType='full'>
      <div className='KeyVisual'>
        <div className='background' />
        <div className='absolute flex h-full w-full flex-col items-center justify-between py-24 md:py-4'>
          <div className='logo' />
          <div className='sub'></div>
        </div>
      </div>
    </Section>
  );
});
export default KeyVisual;
