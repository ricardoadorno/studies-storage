import { atom, createStore, Provider } from "jotai";
import CharCount from "./Jotai/CharCount";
import Input from "./Jotai/Input";
import Uppercase from "./Jotai/Uppercase";

const myStore = createStore();

const anotherAtom = atom("store test");
myStore.get(anotherAtom);

export const textAtom = atom("hello");
export const textLenAtom = atom((get) => get(textAtom).length);
export const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

import { create } from "zustand";
import Votes from "./Zustand/Votes";
export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

const App = () => (
  <div>
    <Provider store={myStore}>
      <Input />
      <CharCount />
      <Uppercase />
    </Provider>
    <Votes />
  </div>
);

export default App;
