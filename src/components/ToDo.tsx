import { IToDo, toDoState, Categories } from './atoms';
import { useSetRecoilState } from 'recoil';

function ToDo({ text, category, id }: IToDo) {
    //atom에서 toDos를 받아와서 수정
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: name as IToDo['category'] };
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        });
    };

    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={onClick}>
                    Done
                </button>
            )}
        </li>
    );
}

export default ToDo;
