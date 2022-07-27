//react-hook-form : form을 쓸 때 발생하는 수많은 useState들을 줄이는 데 도움을 주는 라이브러리
import { useForm } from 'react-hook-form';

function ToDoList() {
    //handleSubmit : submit과 같은 역할
    const { register, handleSubmit, formState } = useForm();
    const onVaild = (data: any) => {
        console.log(data);
    };
    //form 상태와 에러를 확인할 수 있음
    console.log(formState.errors);

    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onVaild)}>
                {/* 복잡하게 하나하나 만들어야 했던 것과 달리 간단하게 validation 가능 */}
                <input {...register('email', { required: true })} placeholder='Email' />
                <input {...register('first_name', { required: true, minLength: 10 })} placeholder='First Name' />
                <input {...register('last_name', { required: true })} placeholder='Last Name' />
                <input {...register('username', { required: true })} placeholder='Username' />
                <input {...register('password', { required: true })} placeholder='Password' />
                <input
                    {...register('password1', {
                        required: 'Password is required',
                        minLength: {
                            value: 5,
                            message: 'Your password is too short.',
                        },
                    })}
                    placeholder='Password1'
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
