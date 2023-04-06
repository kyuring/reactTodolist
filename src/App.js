import './App.css';
import React, {useRef, useState} from 'react';
import TodoTemplate from './components/todoTemplate';
import InputTemplate from './components/inputTemplate';


function App() {
  // 입력창
  const [inputs, setInputs] = useState({
    inputValue : '',
  });
  const {inputValue} = inputs;
  // 입력창 변경
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }
  // todo 카테고리
  const [todos,setTodos] = useState([]);
  // todo 카테고리 생성
  // id 값 생성을 위해 추가
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
    // 입력창 초기화
    setInputs({
      inputsValue : ''
    });
    nextID.current += 1;
  }
  // todo 카테고리 삭제
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
