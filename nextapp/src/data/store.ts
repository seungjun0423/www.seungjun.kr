import { PostType } from 'types/interface';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

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
			id: '',
			accessToken: '',
			refreshToken: ''
    }),
    {
      name: 'state-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
)