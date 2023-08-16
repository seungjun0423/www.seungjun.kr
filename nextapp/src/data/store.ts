import { create } from 'zustand';

interface IAuth {
	isAdmin: boolean;
	setIsAdmin: (value: boolean) => void;
};

export const authState = create<IAuth>((set) => ({
	isAdmin: false,
	setIsAdmin: (value) => set({ isAdmin: value })
}));
