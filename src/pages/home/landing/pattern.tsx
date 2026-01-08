import { LandingPatternTransition } from '@/settings/config';
import useTween from 'lesca-use-tween';
import { memo, useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TransitionEffect = memo(
  ({ inView, index, isLoaded }: { inView: boolean; index: number; isLoaded: boolean }) => {
    const property = LandingPatternTransition[index];
    const [style, setStyle] = useTween(property?.initial.css || { opacity: 0 });

    useLayoutEffect(() => {
      if (!isLoaded) return;
      if (!property) return;

      if (inView) {
        setStyle(property.animate.css, {
          duration: property.animate.duration,
          delay: property.animate.delay,
        });
      } else {
        setStyle(property.initial.css, {
          duration: property.initial.duration,
          delay: property.initial.delay,
        });
      }
    }, [inView, isLoaded]);
    return <div style={style} />;
  },
);

const Pattern = memo(({ isLoaded }: { isLoaded: boolean }) => {
  const { ref, inView } = useInView({ threshold: 0, delay: 100 });

  return (
    <div className='pattern' ref={ref}>
      <div>
        <div>
          {[...new Array(18).keys()].map((index) => (
            <TransitionEffect key={`c${index}`} inView={inView} index={index} isLoaded={isLoaded} />
          ))}
        </div>
      </div>
    </div>
  );
});
export default Pattern;
