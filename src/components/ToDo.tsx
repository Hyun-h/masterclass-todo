import { IToDo } from './atoms';

function ToDo({ text, category, id }: IToDo) {
    //newCategory: IToDo['category'] : 설명해준 타입에서 일부분만 가져와서 쓰는 방법

    //인자를 받아오는 형식으로 clicK event 설정
    // const onClick = (newCategory: IToDo['category']) => {
    //     console.log('현재 카테고리는?', newCategory);
    // };

    // return (
    //     <li>
    //         <span>{text}</span>
    //          새 익명 함수를 선어해서 인자를 넘겨줌
    //         {category !== 'DOING' && <button onClick={() => onClick('DOING')}>Doing</button>}
    //         {category !== 'TO_DO' && <button onClick={() => onClick('TO_DO')}>To Do</button>}
    //         {category !== 'DONE' && <button onClick={() => onClick('DONE')}>Done</button>}
    //     </li>
    // );

    //name을 활용하여 event value를 받아옴
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        console.log('I wanna to', event.currentTarget.name);
    };

    return (
        <li>
            <span>{text}</span>
            {category !== 'DOING' && (
                <button name='DOING' onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== 'TO_DO' && (
                <button name='TO_DO' onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== 'DONE' && (
                <button name='DONE' onClick={onClick}>
                    Done
                </button>
            )}
        </li>
    );
}

export default ToDo;
