import {atom} from 'jotai';

export const counterAtom = atom(0);

export const readCounterAtom = atom(get => get(counterAtom));

export const writeCounterAtom = atom(null, (get, set) =>
  set(counterAtom, get(counterAtom) + 10),
);
