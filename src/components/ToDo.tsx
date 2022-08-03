import { IToDo, toDoState } from './atoms';
import { useSetRecoilState } from 'recoil';

function ToDo({ text, category, id }: IToDo) {
    //atom에서 toDos를 받아와서 수정
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos((oldToDos) => {
            //oldTodos : 기존의 목록을 받아오는 인자
            //click event 가 일어난 toDo 인덱스 감지
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            //감지된 인덱스의 카테고리를 바꿔줌
            const newToDo = { text, id, category: name };
            console.log('oldToDo, newToDo = ', oldToDo, newToDo);
            return oldToDos;
        });
    };

    return (
        <li>
            <span>{text}</span>
            {category !== 'DOING' && (
                <button name='DOING' onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== 'TO_DO' && (
                <button name='TO_DO' onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== 'DONE' && (
                <button name='DONE' onClick={onClick}>
                    Done
                </button>
            )}
        </li>
    );
}

export default ToDo;
