import React, { useState } from 'react'
import './todo.css';


function ToDo() {
  const [item, setItem] = useState('')
  const [todos, setDotos] = useState([1, 2, 3])


  const handleSubmit = (event) => {
    event.preventDefault()
    setDotos([...todos, item])
    setItem('')
  }

  const handleItem = (event) => {
    console.log(event)
    setItem(event.target.value)
  }

  const handleDelete = (todo) => {
    setDotos(todos.filter(todoElement => todoElement !== todo))
  }

   const handleMark = todo => {const element = todo.target;        
                         element.classList.toggle("crossed-line");    };
 


  return (
    <div className="App">
      <header className="App-header">
        Todo
          <form onSubmit={handleSubmit} >
          <input
            placeholder="Add item"
            value={item}
            onChange={handleItem}
          />
          <button type='submit'>Submit</button>
        </form>
        List
        <ul>
          {
            //   check I'm using the double return and the map that got the class stuck hehe
            todos.map(todo => {
              return ( 
                <div
                className="todo"
                
              >
                
                <li key={todo.id}
						item={todo}> {todo}</li>
                <button className='btn remove' onClick={() => handleDelete(todo)}>✕remove</button>
                <br></br>
                <button className='btn mark' onClick={() => handleMark(todo)}>|EDIT|</button>
                </div>
              )
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default ToDo;