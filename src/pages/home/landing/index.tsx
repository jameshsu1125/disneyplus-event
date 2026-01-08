import Section from '@/components/section';
import OnloadProvider from 'lesca-react-onload';
import { memo, useState } from 'react';
import Form from './form';
import './index.less';
import Pattern from './pattern';

const Landing = memo(() => {
  const [isLoaded, setOnload] = useState(false);

  return (
    <OnloadProvider
      hideBeforeLoaded={false}
      onload={() => {
        setTimeout(() => {
          setOnload(true);
        }, 500);
      }}
    >
      <div className='Landing'>
        <Pattern isLoaded={isLoaded} />
        <Section>
          <Form />
        </Section>
      </div>
    </OnloadProvider>
  );
});
export default Landing;
