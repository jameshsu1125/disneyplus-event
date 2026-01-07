import HomeBackground from '@/components/home-background';
import Layer from '@/components/layer';
import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';
import Landing from './landing';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <Layer>
          <HomeBackground />
        </Layer>
        <Layer>
          <Landing />
        </Layer>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
