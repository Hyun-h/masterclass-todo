import { useRecoilValue } from 'recoil';
import { toDoSelector } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
    //이제는 원하는 것을 골라서 가져온 것만 렌더링
    //toDoSelector에서 return하는 게 배열이므로 여기도 배열로 맞춰줘야 함
    const [toDo, doing, done] = useRecoilValue(toDoSelector);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <h2>To Do</h2>
            <ul>
                {toDo.map((toDo) => (
                    // === <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>Doing</h2>
            <ul>
                {doing.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>Done</h2>
            <ul>
                {done.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
        </div>
    );
}

export default ToDoList;
