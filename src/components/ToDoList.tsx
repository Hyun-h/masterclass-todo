import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

interface IToDo {
    text: string;
    id: number;
    //타입스크립트는 매우 한정적인 범위도 만들어서 관리할 수 있음
    category: 'TO_DO' | 'DOING' | 'DONE';
}

interface IForm {
    toDo: string;
}

//현재 atom 의 성격을 타입스크립트한테 설명해줌
const toDoState = atom<IToDo[]>({
    key: 'toDo',
    default: [],
});

function ToDoList() {
    //value와 변경 함수를 둘 다 얻고 싶으면 useRecoilState hook 사용. useState 생각하면 될 듯. useRecoilValue, useSetRecoilState 기능 혼합해서 쓸 경우 사용
    const [toDos, setToDos] = useRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onSubmit = ({ toDo }: IForm) => {
        //useState 생각하면 됨. toDos는 mutate 하고 있기 때문에 바로 push 하면 렌더링이 일어나지 않음.
        //[oldToDo]를 하면 배열 안에 배열을 담게 됨. [...oldToDos]를 해야 요소를 복사해서 넣음.
        setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category: 'TO_DO' }, ...oldToDos]);
        //setValue로 제출되면 form 초기화
        setValue('toDo', '');
    };

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('toDo', {
                        required: '할일 입력 좀 부탁해요',
                    })}
                    placeholder='할일을 입력하세요'
                />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <li key={toDo.id}>{toDo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
