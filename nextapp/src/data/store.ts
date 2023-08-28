import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

interface IEdit {
	isEdit: boolean;
	setIsEdit: (value: boolean) => void;
};

export const editState = create<IEdit>((set) => ({
	isEdit: false,
	setIsEdit: (value) => set({ isEdit: value })
}));

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