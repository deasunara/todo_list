"use client"


import React, { FormEventHandler, useState } from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import Modal from './Modal';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

 const AddTask = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState <Boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState <string | number| undefined |readonly string[]>('');

  const handleSubmitNewTodo : FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue('');
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
        <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full w-full'>add new task <AiOutlinePlus classname="ml-2" size={18}/></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="font-bold text-lg" onSubmit={handleSubmitNewTodo}>
          <h3>Add Task</h3>
          <div className="modal-action">
          <input type="text" placeholder="Type here" 
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
          className="input input-bordered input-primary w-full w-full" />
          <button type='submit' className='btn'>Submit</button>
          </div>
        </form>
        </Modal>
    </div>
  )
}
export default AddTask;