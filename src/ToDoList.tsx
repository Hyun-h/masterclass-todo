//react-hook-form : form을 쓸 때 발생하는 수많은 useState들을 줄이는 데 도움을 주는 라이브러리
import { useForm } from 'react-hook-form';

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
}

function ToDoList() {
    //handleSubmit : submit과 같은 역할
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        //기본값 부여도 가능
        defaultValues: {
            email: '@naver.com',
        },
    });
    const onVaild = (data: any) => {
        console.log(data);
    };

    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onVaild)}>
                {/* 복잡하게 하나하나 만들어야 했던 것과 달리 간단하게 validation 가능 */}
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: 'Only naver.com emails allowed',
                        },
                    })}
                    placeholder='Email'
                />
                <span>{errors?.email?.message}</span>
                <input {...register('firstName', { required: 'write here' })} placeholder='First Name' />
                <span>{errors?.firstName?.message}</span>
                <input {...register('lastName', { required: 'write here' })} placeholder='Last Name' />
                <span>{errors?.lastName?.message}</span>
                <input {...register('username', { required: 'write here', minLength: 10 })} placeholder='Username' />
                <span>{errors?.username?.message}</span>
                <input {...register('password', { required: 'write here', minLength: 5 })} placeholder='Password' />
                <span>{errors?.password?.message}</span>
                <input
                    {...register('password1', {
                        required: 'Password is required',
                    })}
                    placeholder='Password1'
                />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
