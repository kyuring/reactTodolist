import './App.css';
import React, {useRef, useState} from 'react';
import TodoTemplate from './components/todoTemplate';
import InputTemplate from './components/inputTemplate';


function App() {
  const [inputs, setInputs] = useState({
    inputValue : '',
  });
  const {inputValue} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }
  const [todos,setTodos] = useState([]);
  const nextID = useRef(2);
  const onCreate = () => {
    const date = new Date();

    if(inputValue === "") {
      return;
    }

    const todo = {
      todoTitle : inputValue,
      todoTitleId : nextID.current,
      todoDate : date.getFullYear() + '.' + (date.getMonth() +1)  + '.' + date.getDate()
    }

    setTodos(todos.concat(todo));
    
    setInputs({
      inputsValue : ''
    });
    nextID.current += 1;
  }
  const onRemove= (id) => {
    setTodos(todos.filter(todo => todo.todoTitleId !== id));
  }

  return (
    <div className="App">
      <div className='titleBox'>
        TODO List
      </div>
      <InputTemplate inputs={inputs} onChange={onChange} onCreate={onCreate}/>
      <div className='TodoContainer'>
        <TodoTemplate todos={todos} onRemove={onRemove}/>
      </div>
    </div> 
  );
}

export default App;
