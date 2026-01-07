import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

const Section = memo(({ children, widthType }: IReactProps & { widthType?: 'full' | 'normal' }) => (
  <section className='flex w-full justify-center overflow-hidden'>
    <div className={twMerge('relative w-10/12 max-w-5xl', widthType === 'full' && 'w-full')}>
      {children}
    </div>
  </section>
));
export default Section;
