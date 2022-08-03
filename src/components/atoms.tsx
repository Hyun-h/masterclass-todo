import { atom, selector } from 'recoil';

export interface IToDo {
    text: string;
    id: number;
    category: 'TO_DO' | 'DOING' | 'DONE';
}

export const toDoState = atom<IToDo[]>({
    key: 'toDo',
    default: [],
});

//selector : atom의 output을 변형시킴. state를 가져다가 뭔가를 리턴.
export const toDoSelector = selector({
    key: 'toDoSelector',
    //get function이 있어야 atom을 받아(get)올 수 있음
    get: ({ get }) => {
        const toDos = get(toDoState);
        return [toDos.filter((toDo) => toDo.category === 'TO_DO'), toDos.filter((toDo) => toDo.category === 'DOING'), toDos.filter((toDo) => toDo.category === 'DONE')];
    },
});
