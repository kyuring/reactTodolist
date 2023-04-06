import React, {useState} from 'react';
import styles from "../css/todoTemplate.module.css"
import ModalTemplate from './modalTemplate';

/***
 * todo 카테고리 창 
 * 카테고리 창을 선택하면 해당 카테고리별 투두리스트 생성할 수있도록 구현
 * 해당 카테고리에 들어가는 item 들은 todoItems로 생성
 *  ***/
function TodoTemplate({todos, onRemove}) {
  // 모달 창 flag값
    const [useModal, setUesModal] = useState(false);
    const [modalValue, setModalValue] = useState({
      selectTodo : '',
    });
    const onModal = (todo) => {
      setModalValue({selectTodo : todo, todoItems : todoItems.filter(todoItems=>(todoItems.todoTitleId === todo.todoTitleId))});
      setUesModal(!useModal)
    }
    // todo 카테고리별 items 설정
    // todo 카테고리와 연결 하기 위해 todoTitleId 값을 맞춰줌
    const [todoItems, setTodoItems] = useState([])
    // todo item 생성
    const onCreateTodoItems = (item) => {
        setTodoItems(todoItems.concat(item));
    };
    // todo item 체크 결정
    const onSuccessedCheck = (id) => {
      setTodoItems(todoItems.map(
        todoitem => todoitem.itemId === id ? {...todoitem, successed : !todoitem.successed} : todoitem
      ))
    } 
    // todo item 제거
    const onRemoveTodoItems = (id) => {
      setTodoItems(todoItems.filter(item => item.itemId !== id));
    }
    return (
        <>
        {todos.map((todo) => (
            <div key={todo.todoTitleId} className={styles.Box} >
                <button className={styles.btnRemove} onClick={() => onRemove(todo.todoTitleId)}>X</button>
                <div onClick={() => onModal(todo)}>
                  <h1>{todo.todoTitle}</h1>
                  <p>{todo.todoDate}</p>
                </div>
            </div>
        ))}
        <ModalTemplate open={useModal} close={()=>setUesModal(!useModal)} 
        todoTemplate={modalValue.selectTodo} todoItems={todoItems} 
        onCreateTodoItems={onCreateTodoItems}
        onRemoveTodoItems={onRemoveTodoItems}
        onSuccessedCheck={onSuccessedCheck}/>
        </>
        
    );
}
export default TodoTemplate;