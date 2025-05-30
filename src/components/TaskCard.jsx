import React from 'react'

import "./TaskCard.css"
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'


const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className='task_card'>
        <p className='task_text'>This is sample text.</p>
        <div className="task_card_botton_line">
            <div className="task_card_tags">
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            </div>
              <div className="task_delete" onClick={()=>handleDelete(index)}>
                <img src={deleteIcon} className='delete_icon' alt="" />
              </div>
        </div>
    </article>
  )
}

export default TaskCard