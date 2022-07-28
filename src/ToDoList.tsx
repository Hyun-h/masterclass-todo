//react-hook-form : form을 쓸 때 발생하는 수많은 useState들을 줄이는 데 도움을 주는 라이브러리
import { useForm } from 'react-hook-form';

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraError?: string;
}

function ToDoList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IForm>({
        //기본값 부여도 가능
        defaultValues: {
            email: '@naver.com',
        },
    });

    const onVaild = (data: IForm) => {
        //여기서 custom validation 생성
        if (data.password !== data.password1) {
            //shouldFocus : 에러가 일어난 곳으로 포커스 이동
            setError('password1', { message: '비밀번호가 같지 않습니다' }, { shouldFocus: true });
        }
        //서버 상태 감지하는 에러도 다룰 수 있음
        setError('extraError', { message: '서버 오프라인' });
    };

    console.log(errors);

    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onVaild)}>
                {/* 복잡하게 하나하나 만들어야 했던 것과 달리 간단하게 validation 가능 */}
                <input
                    {...register('email', {
                        required: '이메일을 입력하세요',
                        pattern: {
                            //규칙 검사 가능!
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: '네이버 이메일만 사용 가능합니다',
                        },
                    })}
                    placeholder='Email'
                />
                <span>{errors?.email?.message}</span>
                <input
                    {...register('firstName', {
                        required: '빈칸없이 입력해주세요',
                        validate: {
                            //검사요소를 커스텀하게 만들 수 있다.
                            noNico: (value) => (value.includes('nico') ? 'nico 가입 불가' : true),
                            noNick: (value) => (value.includes('nico') ? 'nick 가입 불가' : true),
                        },
                    })}
                    placeholder='First Name'
                />
                <span>{errors?.firstName?.message}</span>
                <input {...register('lastName', { required: '빈칸없이 입력해주세요' })} placeholder='Last Name' />
                <span>{errors?.lastName?.message}</span>
                <input {...register('username', { required: '빈칸없이 입력해주세요', minLength: 10 })} placeholder='Username' />
                <span>{errors?.username?.message}</span>
                <input {...register('password', { required: '빈칸없이 입력해주세요', minLength: 5 })} placeholder='Password' />
                <span>{errors?.password?.message}</span>
                <input
                    {...register('password1', {
                        required: '비밀번호를 입력해주세요',
                        minLength: {
                            value: 5,
                            message: '비밀번호가 너무 짧습니다',
                        },
                    })}
                    placeholder='Password1'
                />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}

export default ToDoList;
