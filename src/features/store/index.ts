import React from 'react';
import { RootStore } from "./RootStore";
import { MobXProviderContext } from 'mobx-react';

export * from './RootStore';

export const useStores = (): RootStore => React.useContext(MobXProviderContext).rootStore;