import Section from '@/components/section';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.less';

const TransitionProperties = [
  { opacity: 0, x: -50, y: 0 },
  { opacity: 0, x: 0, y: 0 },
  { opacity: 0, x: 0, y: 100 },
  { opacity: 0, x: 0, y: 100 },
];

const Text = memo(({ inView, index }: { inView: boolean; index: number }) => {
  const [style, setStyle] = useTween(TransitionProperties[index]);
  useEffect(() => {
    if (inView) {
      setStyle({ opacity: 1, y: 0, x: 0 }, { duration: 700, delay: index * 100 });
    } else {
      setStyle(TransitionProperties[index], 10);
    }
  }, [inView]);
  return (
    <div>
      <div style={style} />
    </div>
  );
});

const Sub = memo(() => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });
  return (
    <div className='sub' ref={ref}>
      {[...new Array(4).keys()].map((index) => (
        <Text key={`t${index}`} inView={inView} index={index} />
      ))}
    </div>
  );
});

const Logo = memo(() => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: false });
  const [style, setStyle] = useTween({ opacity: 0, y: -200 });

  useEffect(() => {
    if (inView) {
      setStyle({ opacity: 1, y: 0 }, { duration: 500, easing: Bezier.outBack });
    } else {
      setStyle({ opacity: 0, y: -200 }, 700);
    }
  }, [inView]);

  return (
    <div className='logo' ref={ref}>
      <div style={style} />
    </div>
  );
});

const Background = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const [style, setStyle] = useTween({ opacity: 0.1 });

  useEffect(() => {
    if (inView) {
      setStyle({ opacity: 1 }, 700);
    } else {
      setStyle({ opacity: 0.1 }, 700);
    }
  }, [inView]);
  return <div className='background' ref={ref} style={style} />;
});

const KeyVisual = memo(() => (
  <Section widthType='full'>
    <div className='KeyVisual'>
      <Background />
      <div className='absolute flex h-full w-full flex-col items-center justify-between py-24 md:py-4'>
        <Logo />
        <Sub />
      </div>
    </div>
  </Section>
));
export default KeyVisual;
