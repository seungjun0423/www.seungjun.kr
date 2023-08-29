import { PostType } from 'types/interface';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

interface IEdit {
	isEdit: boolean;
	setIsEdit: (input: boolean) => void;
};

interface PostStore {
	nowPost: PostType | null;
	setNowPost: (input: PostType) => void
}

export const editState = create<IEdit>((set) => ({
	isEdit: false,
	setIsEdit: (input) => set({ isEdit: input })
}));

export const postStore= create<any>(
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
      isLogin: false,
			
    }),
    {
      name: 'state-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)