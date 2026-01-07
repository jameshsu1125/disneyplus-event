import { memo, useRef, useState } from 'react';
import 'swiper/css';
import Album from './album';
import Carousel from './carousel';
import './index.less';
import Detail from './detail';

const Item = memo(({ item }: { item: string }) => {
  const ref = useRef<any>(null);
  const [state, setState] = useState(0);
  const onAlbumChange = (index: number) => {
    ref.current?.slideTo(index);
  };
  return (
    <div className='item'>
      <div className={`t-${item}`} />
      <Carousel ref={ref} item={item} setState={setState} />
      <Album item={item} state={state} onAlbumChange={onAlbumChange} />
      <Detail />
    </div>
  );
});
export default Item;
