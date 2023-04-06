import React from 'react';
import styles from '../css/todoItemComponents.module.css'

/*** 
 * TODO Item 설정
 * ***/
function TodoItemComponents ({todoItems, onRemoveTodoItems, onSuccessedCheck}){
    // todo item 제거
    const removeItem = (id) => {
        onRemoveTodoItems(id)
    }
    // todo item 체크
    const clickItem = (id) => {
        onSuccessedCheck(id)
    }
    return(
        <div className={styles.box}>
            <div className={todoItems.successed ? styles.itemSuccessed : styles.item}>
                <p className={todoItems.successed ? styles.strItemSuccessed : styles.strItem}>{todoItems.title}</p>
            </div>
            <div className={styles.buttonBox}>
                <button className={todoItems.successed ? styles.btnChecked : styles.btnCheck} onClick={() => clickItem(todoItems.itemId)}>V</button>
                <button className={styles.btnRemove} onClick={() => removeItem(todoItems.itemId)}>X</button>
            </div>
        </div>
    )
}

export default TodoItemComponents;