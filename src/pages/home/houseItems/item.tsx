import { memo, useRef, useState } from 'react';
import 'swiper/css';
import Album from './album';
import Carousel from './carousel';
import './index.less';
import Detail from './detail';
import Div100vh from 'react-div-100vh';

const Item = memo(({ item }: { item: string }) => {
  const ref = useRef<any>(null);

  const [state, setState] = useState(0);

  const onAlbumChange = (index: number) => {
    ref.current?.slideTo(index);
  };

  return (
    <Div100vh className='min-h-350 w-full'>
      <div className='item' id={item}>
        <div className={`t-${item}`} />
        <Carousel ref={ref} item={item} setState={setState} />
        <Album item={item} state={state} onAlbumChange={onAlbumChange} />
        <Detail item={item} />
      </div>
    </Div100vh>
  );
});
export default Item;
