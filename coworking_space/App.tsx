import {MainNavigator} from '@navigators/MainNavigator';
import React, {FC, Fragment} from 'react';

interface IApp {}

export const App: FC<IApp> = () => {
  return (
    <Fragment>
      <MainNavigator />
    </Fragment>
  );
};

export default App;
