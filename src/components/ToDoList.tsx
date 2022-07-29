import { useRecoilValue } from 'recoil';
import { toDoState } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
    //컴포넌트 분리로 기능이 분리되었으므로 가져와서 쓰는 useRecoil"Value"를 써야함
    const toDos = useRecoilValue(toDoState);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <ul>
                {toDos.map((toDo) => (
                    // === <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
