import { useState } from 'react';
import classes from './Form.module.css';
import List from './List';
import { MdEditNote } from "react-icons/md";


const Form = () => {
    const[data,setData] = useState('');
    const[enterdata,setEnterdata] = useState([]);
    const[edit,setEdit] = useState(true);
    const[editid,setEditid] = useState(null);
    const[isvalid,setIsvalid] = useState(false);
    const inputChangeHandler = (event) => {
        setData(event.target.value);
    }

    const dltHandler = (id) => {
      console.log('this is id : '+ id);
      const deldata = enterdata.filter((elem,index)=>{
        return index !== id;
          });
      setEnterdata(deldata);
      }

      const editHandler = (id) => {
        const editData = enterdata.find((elem,index)=>{
          return index===id;
        });
        setData(editData);
        setEditid(id);
        setEdit(false);
}

const removeHandler = () => {
  if(enterdata.length <= 0){
alert("No List Exists... !");
  }else{
    setEnterdata([]);
  } 
}

    const submitHandler = (event) => {
    event.preventDefault();
    if(data.trim().length===0)
    {
      alert('Enter a valid data');
      return;
    }else if (!edit) 
    {
  setEnterdata(
    enterdata.map((items,index)=>{
  if(index===editid){
    console.log(enterdata[index] =data);
    return enterdata[index] = data;
  }
  return items;
 }));
  setEdit(true);
  setData('');
  setEditid(null);
    }

    else{
   setEnterdata((preData)=>{return [...preData,data]});
    setData(" ");
    }
    }
    const mouseoverHandler = () => {
      setIsvalid(true);
    }
    const mouseoutHandler = () => {
      setIsvalid(false);
    }


  return (
    <>
        <h1>TODO LIST</h1>          
    <form onSubmit={submitHandler} className={classes.maindiv}>
        <input value={data} onChange={inputChangeHandler} type='text' placeholder='Please Enter Your Data'/>
      { edit ? <button>ADD</button> : 
      <button> <MdEditNote onClick={submitHandler} size={18} /></button> 
      } 
      <button style={{backgroundColor:isvalid ? "whitesmoke":"red",color:isvalid ? "red" : "white"}} type='button' onClick={removeHandler}
      onMouseOver={mouseoverHandler} onMouseOut={mouseoutHandler}>Clear List</button>
    </form>
    <ul className={classes.ulist}>
 {enterdata.map((value,index)=>{return (
    <List
    onEdit={editHandler} 
    ondlt={dltHandler}
    id={index}
    key={index}
    data={value}
    />
 )})}
 </ul>

  </>
  )

}

export default Form;