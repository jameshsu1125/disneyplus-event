import Section from '@/components/section';
import User from '@/components/user';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { IntersectionTriggerOnce, Users } from '@/settings/config';
import { memo, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.less';
import Title from './title';
import Music from '@/components/music';

const Actors = memo(() => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: IntersectionTriggerOnce });
  return (
    <div className='row pb-16' ref={ref}>
      {Users.actors.map((user, index) => (
        <User key={user.name} data={user} inView={inView} index={index} isPadding={index < 2} />
      ))}
    </div>
  );
});

const Experts = memo(() => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: IntersectionTriggerOnce });

  const [device] = useMedia();

  const exports = useMemo(() => {
    if (device === MediaType.XS) {
      return Users.experts.map((user, index) => (
        <User key={user.name} data={user} index={index} inView={inView} />
      ));
    }
    return [0, ...Users.experts, 0].map((user, index) => {
      if (typeof user === 'object')
        return <User key={user.name || '0'} data={user} index={index} inView={inView} />;
      return <div key={`empty-${index}`} />;
    });
  }, [device, inView]);

  return (
    <div className='row pb-8' ref={ref}>
      {exports}
    </div>
  );
});

const TeamIntroduction = memo(() => {
  useEffect(() => {}, []);

  return (
    <Section>
      <div className='TeamIntroduction'>
        <Title name='actor' />
        <Actors />
        <Title name='expert' />
        <Experts />
        <Music />
      </div>
    </Section>
  );
});
export default TeamIntroduction;
