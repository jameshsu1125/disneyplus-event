import { memo } from 'react';
import ReactHowler from 'react-howler';
import Section from '../section';
import src from './src/(60s) 動力火車 - 最後一搏 .mp3';

const Music = memo(() => (
  <Section>
    <p className='text-secondary w-full text-center text-sm'>
      網站歌曲：最後一搏（《凶宅專賣店》主題曲 ）·動力火車
    </p>
    <ReactHowler src={src} playing={true} />
  </Section>
));
export default Music;
