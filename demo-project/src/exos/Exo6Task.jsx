
import style from './Exo6.module.css'
export const Exo6Task = (props) => {
  const { task, onDoneTask,onDeleteTask } = props
  const { id, what, done,priority,description } = task

  return (
    <div>
      <h3 className={style.h3}>{what}</h3>
      {description && <p>{description}</p>}
       <div>
        {!done && (
          <button  className={style.btn} onClick={() => onDoneTask(id)}>Finish</button>
        )}
       <button  className={style.btnDelte} onClick={() => onDeleteTask(id)}>Delete</button>

       
      
     </div>
     </div>
  )
}



