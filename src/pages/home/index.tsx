import HomeBackground from '@/components/home-background';
import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import HouseItems from './houseItems';
import './index.less';
import KeyVisual from './keyVisual';
import Landing from './landing';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <HomeBackground />
        <Landing />
        <HouseItems />
        <KeyVisual />
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
