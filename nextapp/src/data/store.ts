import { create } from 'zustand';

interface IAuth {
	isAdmin: boolean;
	setIsAdmin: (value: boolean) => void;
};

export const authState = create<IAuth>((set) => ({
	isAdmin: false,
	setIsAdmin: (value) => set({ isAdmin: value })
}));

interface IEdit {
	isEdit: boolean;
	setIsEdit: (value: boolean) => void;
};

export const editState = create<IEdit>((set) => ({
	isEdit: false,
	setIsEdit: (value) => set({ isEdit: value })
}));
