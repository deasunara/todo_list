import React from 'react'
import { ITask } from '@/Types/tasks';
import Task from './Task';

interface TodoListProps {
  tasks: ITask[];
}

const TodoList : React.FC<TodoListProps>  = ({tasks}) => {
  
  return (
    <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => 
      <Task key={task.id} task={task} />)}
    </tbody>
  </table>
</div>
  )
}
export default TodoList;
