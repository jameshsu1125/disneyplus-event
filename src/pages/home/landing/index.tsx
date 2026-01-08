import Section from '@/components/section';
import { memo, useState } from 'react';
import Form from './form';
import './index.less';
import Pattern from './pattern';
import OnloadProvider from 'lesca-react-onload';

const Landing = memo(() => {
  const [isLoaded, setOnload] = useState(false);

  return (
    <OnloadProvider
      hideBeforeLoaded={false}
      onload={() => {
        const onload = () => {
          setOnload(true);
          window.removeEventListener('load', onload);
        };
        window.addEventListener('load', onload);
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
