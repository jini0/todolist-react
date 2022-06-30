//내가 한거!!!!
// import logo from './logo.svg';
import { useRef, useState } from 'react';
import './App.css';
import TypeTodolist from './Components/TypeTodolist';
import CreateTodolist from './Components/CreateTodolist';
import './style.css';

function App() {
  //CreateTodolist의 입력 인풋을 상태관리
  //input이 하나면 이렇게 하면 안됨!
  // 그냥 값을 넣어주면 됨.,..모르겠어
  const [ inputs, setInputs ] = useState("")
  // const onChange = (e) =>{
  //   const { name, value } = e.target;
  //   // setInputs(e.target.value);
  //   setInputs({
  //     ...inputs,
  //     [name]:value
  //   })
  //   // console.log(inputs);
  // }
  const onChange = (e) =>{
    const inputValue = e.target.value;
    setInputs(inputValue);
  }
  const  list1   = inputs;

  const [ lists, setLists ] = useState([
    {
      id: 1,
      list1: "해야할일1"
    },{
      id: 2,
      list1: "해야할일2"
    },{
      id: 3,
      list1: "해야할일3"
    }

]);
  const nextId = useRef(4);
  const onCreate = () => {
    const list = {
      id: nextId.current,
      list1,
    }
    setLists([...lists,list]);       
    setInputs({
      list1:"",
    })
    nextId.current += 1;
  }

  return (
    <div className="App">
        <div id="wrap">
          <CreateTodolist list1={list1} onChange={onChange} onCreate={onCreate} />
          <TypeTodolist lists={lists}/>
        </div>
    </div>
  );
}

export default App;
