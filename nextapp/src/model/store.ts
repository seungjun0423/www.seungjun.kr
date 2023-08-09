import { create } from 'zustand'
import { Width } from './interface';

export const InnerWidthStore = create<Width>((set) => ({
  innerWidth: window.innerWidth,
  setInnerWidth: (input) => set( state => ({ innerWidth: input })),
}));