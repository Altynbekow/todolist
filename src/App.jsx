import React, {Component} from 'react';
import TodoHeader from "./components/TodoHeader/TodoHeader.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoListItem from "./components/TodoListItem/TodoListItem.jsx";
import TodoClear from "./components/TodoClear/TodoClear.jsx";
import {render} from "react-dom";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
    // локальное хранилище
    state = {
        task: [
            {
                id: 1,
                text: "learn React",
                isDone: false
            },
            {
                id: 2,
                text: "learn Redux",
                isDone: false
            },
            {
                id: 3,
                text: "Practice React JS",
                isDone: false
            },
            {
                id: 4,
                text: "Code porfolio in React",
                isDone: false
            },
            {
                id: 5,
                text: "Learn React Native",
                isDone: false
            }

        ]
    }
    // метод
    deleteTodo = (taskId) => {
        console.log(taskId)
        const fillteredTasks = this.state.task.filter(t => t.id !== taskId)
        this.setState({task: fillteredTasks})
        toast.success("item deleted")
    }
    // method
    addNewTask = (text) => {
        const newTask = {
            id: Math.random(),
            text,
            isDone: false
        }
        this.setState({task: [...this.state.task, newTask]})
        toast.info('item added')
    }

 doneTask = (taskId)=>{
        const updateTasks = this.state.task.map(t=>{
            if (t.id === taskId){
                return{
                    ...t,
                    isDone: !t.isDone
                }
            }else{
                return t
            }
        })
     this.setState({task:updateTasks})
     toast.info('task completed')
 }

    clearAllTasks = () => {
        this.setState({ task: [] }); // Устанавливаем пустой массив задач
        toast.info("All tasks cleared");
    }

render()
{
    return (
        <div style={{width: 800}} className={'mx-auto'}>
            <ToastContainer/>
            <TodoHeader addNewTask={this.addNewTask}/>
            <TodoList />
            {this.state.task.map(t => <TodoListItem deleteTodo={this.deleteTodo} doneTask={this.doneTask}
                                                    key={t.id} {...t}/>)}
            <TodoClear clearAll={this.clearAllTasks}/>
        </div>
    )

}
}
;

export default App;
