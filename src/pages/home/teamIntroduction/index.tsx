import Section from '@/components/section';
import User from '@/components/user';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { Users } from '@/settings/config';
import { memo, useEffect, useMemo } from 'react';
import './index.less';
import Title from './title';

const TeamIntroduction = memo(() => {
  useEffect(() => {}, []);
  const [device] = useMedia();

  const exports = useMemo(() => {
    if (device === MediaType.XS) {
      return Users.experts.map((user) => <User key={user.name} data={user} />);
    }
    return [0, ...Users.experts, 0].map((user, index) => {
      if (typeof user === 'object') return <User key={user.name || '0'} data={user} />;
      return <div key={`empty-${index}`} />;
    });
  }, [device]);

  return (
    <Section>
      <div className='TeamIntroduction'>
        <Title name='actor' />
        <div className='row'>
          {Users.actors.map((user) => (
            <User key={user.name} data={user} />
          ))}
        </div>
        <Title name='expert' />
        <div className='row'>{exports}</div>
      </div>
    </Section>
  );
});
export default TeamIntroduction;
