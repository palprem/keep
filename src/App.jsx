import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

function App() {
  const [addItem, setAddItem] = useState([]);
  console.log(addItem);

  const addNote =(Note)=>{
    setAddItem((prevData)=>{
      return[...prevData,Note]
    });
  console.log(Note);    
  };
  const onDelete =(id)=>{
    setAddItem((olddata)=>
      olddata.filter((currdata, indx)=>{
        return indx !== id;
      })
    )
  }
  return (
    <>
    <Header/>
    <CreateNote passNote={addNote} />
    {addItem.map((val, index)=>{
      return(
        <Note key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete} />
      )
    })}
    <Footer/>

    </>
  );
}

export default App;
