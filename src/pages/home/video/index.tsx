import Section from '@/components/section';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useEffect, useMemo } from 'react';
import './index.less';

const Video = memo(() => {
  const [, setContext] = useContext(Context);
  const [device] = useMedia();

  const size = useMemo(() => {
    if (device > MediaType.SM) return { width: 1024, height: 576 };
    return { width: 750, height: 421 };
  }, [device]);

  useEffect(() => {
    const onClick = () => {
      setContext({ type: ActionType.Music, state: false });
    };

    let blurTimeout: NodeJS.Timeout;

    const onBlur = () => {
      blurTimeout = setTimeout(() => {
        if (document.activeElement?.tagName === 'IFRAME') {
          onClick();
        }
      }, 0);
    };

    const onFocus = () => {
      clearTimeout(blurTimeout);
    };

    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    return () => {
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
      clearTimeout(blurTimeout);
    };
  }, []);

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
