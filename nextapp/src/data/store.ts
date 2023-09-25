import { PostType } from 'types/interface';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create((set) => ({
  id: null,
	setStore: (input: number)=> set((state: any) => {id: input})
}))

export const postStore= create(
  persist(
    (set, get): any => ({
      nowPost: {},
			setNowPost: (input: PostType) => {nowPost: input}
    }),
    {
      name: 'post-storage', 
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
)

export const stateStore: any = create(
  persist(
    (set, get): any => ({
			id: null,
			darkMode: false,
    }),
    {
      name: 'state-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
)