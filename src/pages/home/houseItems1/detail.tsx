import { memo, useContext, useEffect, useMemo, useRef } from 'react';
import './detail.less';
import { HomeContext } from '../config';
import useMedia from '@/hooks/useMedia';

const Detail = memo(({ item }: { item: string }) => {
  const [state, setState] = useContext(HomeContext);

  const [deviceWidth] = useMedia();

  const ref = useRef<HTMLDivElement>(null);

  const list = useMemo(() => {
    if (item === 'apartment') {
      return (
        <>
          <li>老宅潛力股，身價看漲</li>
          <li>
            低公設，<span>衣櫥打開有驚喜</span>
          </li>
          <li>生活機能佳，優質學區，給孩子最好的陪伴</li>
          <li>
            採光佳，<span>不用開冷氣就透心涼</span>
          </li>
        </>
      );
    }
    return (
      <>
        <li>四樓挑高透天，低總價稀有物件</li>
        <li>屋況佳，採光佳</li>
        <li>
          <span>保留屋主特殊品味祭壇</span>
        </li>
        <li>
          <span>怨念已請慈安堂消除</span>
        </li>
        <li>適合夫妻和諧、有愛之大家庭</li>
      </>
    );
  }, [item]);

  useEffect(() => {
    if (ref.current) {
      setState((S) => ({ ...S, detailWidth: 0 }));
      requestAnimationFrame(() => {
        setState((S) => ({
          ...S,
          detailWidth:
            S.detailWidth > (ref.current?.clientWidth || 0)
              ? S.detailWidth
              : ref.current?.clientWidth || 0,
        }));
      });
    }
  }, [item, deviceWidth]);

  return (
    <div className='detail'>
      <div className='title' />
      <div className='table'>
        <div className='head' />
        <div
          className='body'
          ref={ref}
          style={state.detailWidth ? { width: `${state.detailWidth}px` } : undefined}
        >
          <ul>{list}</ul>
        </div>
      </div>
    </div>
  );
});
export default Detail;
