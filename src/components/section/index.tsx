import { IReactProps } from '@/settings/type';
import { memo } from 'react';

const Section = memo(({ children }: IReactProps) => (
  <section className='flex w-full justify-center'>
    <div className='relative w-10/12 max-w-7xl'>{children}</div>
  </section>
));
export default Section;
