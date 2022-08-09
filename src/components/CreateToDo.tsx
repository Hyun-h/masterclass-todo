import { useForm } from 'react-hook-form';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoState } from './atoms';

interface IForm {
    toDo: string;
}

function CreateToDo() {
    //컴포넌트 분리로 기능이 분리되었으므로 use"Set"RecoilState를 써야함
    const setToDos = useSetRecoilState(toDoState);
    //category도 상태관리를 하므로 recoil에서 가져와서 사용 가능
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onSubmit = ({ toDo }: IForm) => {
        //atom에서 category에 type을 부여해줘야 함
        setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category }, ...oldToDos]);
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
