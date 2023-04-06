import React, {useState,useRef} from 'react';
import '../css/modalTemplate.css'
import InputTemplate from './inputTemplate';
import TodoItemComponents from './todoItemComponents';


function ModalTemplate (props) {
    const {open, close, todoTemplate, todoItems, onCreateTodoItems, onRemoveTodoItems, onSuccessedCheck} = props;
    const [inputs, setInputs] = useState({
        inputValue : ''
      });
    const onChange = e => {
    const {name, value} = e.target;
    setInputs({
        ...inputs,
        [name] : value
    });
    }
    const {inputValue} =inputs;

    const nextID = useRef(3);
    const onCreateItem = () =>{
        const item = {
            todoTitleId : todoTemplate.todoTitleId,
            itemId : nextID.current,
            title : inputValue,
            successed : false
        };
        nextID.current += 1;
        onCreateTodoItems(item);
        setInputs({
            inputsValue : ''
        })
    }    
    return(
        <div className={open? 'openModal modal' : 'modal'}>
            { open ? (
                <section>
                <header>
                    {todoTemplate.todoTitle}
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </header>
                <main>
                    <InputTemplate  onChange={onChange} inputs={inputs} onCreate={onCreateItem} value={"+"}/>
                    
                    <div className='todoContents'>
                        {todoItems.filter(item => item.todoTitleId === todoTemplate.todoTitleId).map((item) => (
                            <TodoItemComponents key={item.itemId} todoItems={item} onRemoveTodoItems={onRemoveTodoItems} onSuccessedCheck={onSuccessedCheck}/>
                        ))}
                    </div>
                    
                </main>
                <footer>
                    <p>{ "전체: " + todoItems.filter(item => item.todoTitleId === todoTemplate.todoTitleId).length + "완료 : " + todoItems.filter(item => item.todoTitleId === todoTemplate.todoTitleId).filter(item => item.successed === true).length }</p>
                    {/* <button className="close" onClick={close}>
                        close
                    </button> */}
                </footer>
            </section>
            ) : null}
        </div>
    )
}

export default ModalTemplate;