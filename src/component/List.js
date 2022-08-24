import classes from './List.module.css';
import { MdDelete,MdEditNote } from "react-icons/md";


const List = (props) => {

  const del = (id) => {
    props.ondlt(id);
  }
  const edit = (id) => {
    props.onEdit(id);
  }

  return (
    <>
        <li className={classes.mainlist}>
           <span> {props.data} </span>
            <span className={classes.cruds}> 
            <MdEditNote className={classes.edithover} onClick={()=>{edit(props.id)}} size={19}  />
            <MdDelete className={classes.dlthover} onClick={()=>{del(props.id)}}  style={{marginLeft:"1.5rem"}} /> 
              </span>
        </li>
    
    </>
  )
}

export default List;