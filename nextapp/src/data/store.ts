import {create} from 'zustand';

interface State1 {
	state: number;
	setState: (newState: number) => void;
}

export const projectName = create<State1>((set) => ({
	state: 0,
	setState: (newState) => set({state: newState})
}))
