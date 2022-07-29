import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from './atoms';

interface IForm {
    toDo: string;
}

function CreateToDo() {
    //컴포넌트 분리로 기능이 분리되었으므로 use"Set"RecoilState를 써야함
    const setToDos = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onSubmit = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category: 'TO_DO' }, ...oldToDos]);
        setValue('toDo', '');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('toDo', {
                    required: '할일 입력 좀 부탁해요',
                })}
                placeholder='할일을 입력하세요'
            />
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;
