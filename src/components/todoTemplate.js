import React, {useState} from 'react';
import styles from "../css/todoTemplate.module.css"
import ModalTemplate from './modalTemplate';

function TodoTemplate({todos, onRemove}) {
    const [useModal, setUesModal] = useState(false);
    const onModal = (todo) => {
      setModalValue({selectTodo : todo, todoItems : todoItems.filter(todoItems=>(todoItems.todoTitleId === todo.todoTitleId))});
      setUesModal(!useModal)
    }
    const [todoItems, setTodoItems] = useState([])

    const onCreateTodoItems = (item) => {
        setTodoItems(todoItems.concat(item));
        // console.log(todoItems)
    };
    const [modalValue, setModalValue] = useState({
        selectTodo : '',
    });

    const onSuccessedCheck = (id) => {
      setTodoItems(todoItems.map(
        todoitem => todoitem.itemId === id ? {...todoitem, successed : !todoitem.successed} : todoitem
      ))
    } 

    const onRemoveTodoItems = (id) => {
      setTodoItems(todoItems.filter(item => item.itemId !== id));
      // console.log(todoItems)
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