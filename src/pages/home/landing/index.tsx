import Section from '@/components/section';
import { memo, useState } from 'react';
import Form from './form';
import './index.less';
import Pattern from './pattern';
import OnloadProvider from 'lesca-react-onload';
import Div100vh from 'react-div-100vh';

const Landing = memo(() => {
  const [isLoaded, setOnload] = useState(false);

  return (
    <Div100vh>
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
    </Div100vh>
  );
});
export default Landing;
