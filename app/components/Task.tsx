"use client"

import { ITask } from '@/Types/tasks';
import React, { FormEventHandler } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/api';
import Modal from './Modal';

interface TaskProps {
    task: ITask;
}

const Task: React.FC<TaskProps> = ({task}) => {
  const [openModalEdit, setOpenModalEdit ] = useState <Boolean>(false);
  const [modalOpenDelete, setModalOpenDelete ] = useState <Boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState <string>(task.text);
  const router = useRouter();

  const handleSubmitEdit : FormEventHandler<HTMLFormElement>=  async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setTaskToEdit('')
    setOpenModalEdit(false)
    router.refresh()
  };
  
  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setModalOpenDelete(false)
    router.refresh()
  };

  return (
    <tr key={task.id}>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-5'>
      <FaEdit onClick={() => setOpenModalEdit(true)} className='text-blue-500' cursor="pointer" size="20"/>
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form className="font-bold text-lg" onSubmit={handleSubmitEdit}>
          <h3>Edit Task</h3>
          <div className="modal-action">
          <input type="text" placeholder="Type here" 
          value={taskToEdit}
          onChange={(e) => setTaskToEdit(e.target.value)}
          className="input input-bordered input-primary w-full" />
          <button type='submit' className='btn'>Edit</button>
          </div>
        </form>
        </Modal>  
       <FaTrash onClick={() => setModalOpenDelete(true)} cursor="pointer" size={20}/>
      <Modal modalOpen={modalOpenDelete} setModalOpen={setModalOpenDelete}>
        <h3 className='text-lg'>Apa Kamu yakin ingin mengahpus ?</h3>
        <div className="modal-action">
          <button type='submit' className='btn btn-error mr-2'
          onClick={() => handleDeleteTask(task.id)}
          >Hapus</button>
        </div>
      </Modal>
      </td>
    </tr>
    
  )
}
export default Task;