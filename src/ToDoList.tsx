//react-hook-form : form을 쓸 때 발생하는 수많은 useState들을 줄이는 데 도움을 주는 라이브러리
import { useForm } from 'react-hook-form';

// function ToDoList() {
//     const [toDo, setToDo] = useState('');
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value },
//         } = event;
//         setToDo(value);
//     };
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(toDo);
//     };

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder='Write a to do' />
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

function ToDoList() {
    //register를 사용하면 필요한 object가 내장되어 있어 onChange 이벤트 핸들러가 필요없어짐 => 각 input마다 useState를 줄 일이 사라짐
    //watch form 의 입력값들의 변화를 관찰 할 수 있게 해주는 함수
    const { register, watch } = useForm();
    console.log(watch());

    return (
        <div>
            <form>
                <input {...register('email')} placeholder='Email' />
                <input {...register('first_name')} placeholder='First Name' />
                <input {...register('last_name')} placeholder='Last Name' />
                <input {...register('username')} placeholder='Username' />
                <input {...register('password')} placeholder='Password' />
                <input {...register('password1')} placeholder='Password1' />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
