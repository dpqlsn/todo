import "../App.css";
import Todoitem from './Todoitems';

const List = () => {
    const dummyTodos = [
        {
        id: 1,
        content: "React 공부하기",
        date: "2025. 4. 21.",
        isDone: false
        },
        {
        id: 2,
        content: "Next.js 복습하기",
        date: "2025. 4. 21.",
        isDone: false
        },
        {
        id: 3,
        content: "Node.js 실습하기",
        date: "2025. 4. 21.",
        isDone: true
        }
    ];

    return (
        <div className="List">
        <h4> Todo List 🌱</h4>
        <input placeholder="검색어를 입력하세요" />
        <div className="todos_wrapper">
            {dummyTodos.map((todo) => (
            <Todoitem
                key={todo.id}
                content={todo.content}
                date={todo.date}
                isDone={todo.isDone}
            />
            ))}
        </div>
        </div>
    );
};

export default List;
