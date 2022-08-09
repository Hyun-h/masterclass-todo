import { useRecoilValue, useRecoilState } from 'recoil';
import { categoryState, toDoSelector, Categories } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
    //더이상 toDoSelector가 배열을 반환하지 않으므로 배열에서 toDos로 교체
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        //타입스크립트는 option의 value가 categories 타입과 같다는 걸 알지 못함
        setCategory(event.currentTarget.value as any);
    };
    console.log(category);

    return (
        <div>
            <h1>To Dos</h1>
            <select value={category} onInput={onInput}>
                {/* 실수할 수 있으므로... 전체적인 타입을 수정해야하는데 한 곳만 빼고 수정한다던가... 그런.. string을 바로 쓰는 건 좋지 않음 */}
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
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
