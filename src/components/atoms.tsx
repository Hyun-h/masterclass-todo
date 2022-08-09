import { atom, selector } from 'recoil';

export interface IToDo {
    text: string;
    id: number;
    category: 'TO_DO' | 'DOING' | 'DONE';
}

//category 상태관리
export const categoryState = atom({
    key: 'category',
    default: 'TO_DO',
});

export const toDoState = atom<IToDo[]>({
    key: 'toDo',
    default: [],
});

//selector : atom의 output을 변형시킴. state를 가져다가 뭔가를 리턴.
export const toDoSelector = selector({
    key: 'toDoSelector',
    //get function이 있어야 atom을 받아(get)올 수 있음
    get: ({ get }) => {
        //get안의 state를 가져와서 쓸겁니다
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});
