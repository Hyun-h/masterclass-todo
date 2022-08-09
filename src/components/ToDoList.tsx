import { useRecoilValue, useRecoilState } from 'recoil';
import { categoryState, toDoSelector } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
    //더이상 toDoSelector가 배열을 반환하지 않으므로 배열에서 toDos로 교체
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    };
    console.log(category);

    return (
        <div>
            <h1>To Dos</h1>
            <select value={category} onInput={onInput}>
                <option value='TO_DO'>To Do</option>
                <option value='DOING'>Doing</option>
                <option value='DONE'>Done</option>
            </select>
            <hr />
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    );
}

export default ToDoList;
