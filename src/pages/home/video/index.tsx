import Section from '@/components/section';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { memo, useMemo } from 'react';
import './index.less';

const Video = memo(() => {
  const [device] = useMedia();

  const size = useMemo(() => {
    if (device > MediaType.SM) return { width: 1024, height: 576 };
    return { width: 750, height: 421 };
  }, [device]);

  return (
    <Section>
      <div className='Video'>
        <div className='text'>
          {[...new Array(2).keys()].map((index) => (
            <div key={`t${index}`} />
          ))}
        </div>
        <div className='ytb'>
          <iframe
            width={size.width}
            height={size.height}
            src='https://www.youtube.com/embed/8Wxwg8sgVPs?si=kylORWCUNtj_VEF4'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Section>
  );
});
export default Video;
