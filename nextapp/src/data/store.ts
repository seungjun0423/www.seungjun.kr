import { PostType } from 'types/interface';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create((set, get) => ({
  id: null,
	setStore: (input: number | null)=> set({id: input})
}))

export const postStore= create(
  persist(
    (set, get): any => ({
      nowPost: {},
    }),
    {
      name: 'post-storage', 
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
)

export const stateStore = create(
  persist(
    (set, get): any => ({
			id: null,
			setStore: (input: number | null)=> set({id: input})
    }),
    {
      name: 'state-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
)