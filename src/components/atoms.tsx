import { atom, selector } from 'recoil';

//type은 단순히 복붙을 하게 해서 활용성이 떨어짐
//type categories = 'TO_DO' | 'DOING' | 'DONE';
export enum Categories {
    //이렇게만 사용하면 식별을 순서대로 숫자로 나타냄. 예) Categories['TO_DO'] = 0
    // 'TO_DO',
    // 'DOING',
    // 'DONE',

    //숫자가 아닌 각각의 의미를 부여하려면 아래와 같이 사용. 'TO_DO' = '원하는 이름'
    'TO_DO' = 'TO_DO',
    'DOING' = 'DOING',
    'DONE' = 'DONE',
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

//category 상태관리
export const categoryState = atom<Categories>({
    key: 'category',
    default: Categories.TO_DO,
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
