import { memo } from 'react';
import 'swiper/css';
import Carousel from './carousel';
import './index.less';
import Album from './album';

const Item = memo(({ item }: { item: string }) => {
  return (
    <div className='item'>
      <div className='title' />
      <Carousel item={item} />
      <Album item={item} />
    </div>
  );
});
export default Item;
