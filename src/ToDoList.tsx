import { useForm } from 'react-hook-form';

interface IForm {
    toDo: string;
}

function ToDoList() {
    //handleSubmit은 반드시 첫번째 매개변수로 데이터가 유효할 때 호출되는 다른 함수를 받아야 함.
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onSubmit = (data: IForm) => {
        console.log('add to do', data.toDo);
        //setValue로 제출되면 form 초기화
        setValue('toDo', '');
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('toDo', {
                        required: '할일 입력 좀 부탁해요',
                    })}
                    placeholder='할일을 입력하세요'
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
