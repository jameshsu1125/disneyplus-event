import { Context } from '@/settings/constant';
import { memo, useEffect, useContext } from 'react';
import ReactHowler from 'react-howler';
import Section from '../section';
import src from './src/(60s) 動力火車 - 最後一搏 .mp3';
import { ActionType } from '@/settings/type';

const Music = memo(() => {
  const [context, setContext] = useContext(Context);
  const isPlaying = context.music || false;

  useEffect(() => {
    window.addEventListener('click', () => {
      setContext({ type: ActionType.Music, state: true });
      document.querySelectorAll('iframe').forEach((iframe) => {
        iframe.contentWindow?.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
      });
    });
  }, []);

  return (
    <Section>
      <p className='text-secondary w-full text-center text-sm'>
        {`網站歌曲：最後一搏（《凶宅專賣店》主題曲 ）·  動力火車`}
      </p>
      <ReactHowler src={src} playing={isPlaying} />
    </Section>
  );
});
export default Music;
