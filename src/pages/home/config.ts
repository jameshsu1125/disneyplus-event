import { createContext, Dispatch, SetStateAction } from 'react';

export enum HomeStepType {
  unset = 0,
  fadeIn = 1,
}
export type THomeState = { step: HomeStepType; detailWidth: number };
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState = { step: HomeStepType.unset, detailWidth: 0 };
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);
