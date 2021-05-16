import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

function CreateNote(props) {
    const [Note, setNote] = useState({
        title:'',
        content:''
    });
    
    const inputEvent = (event)=>{
        const { name, value } = event.target;
        setNote((preData)=>{
            return{
                ...preData,
                [name] :value,
            }
        })
    }

    const addEvent = ()=>{
        props.passNote(Note);
        setNote({
            title:"",
            content:"",
        })
    }

  return (
    <>
    <div className="main_note">
        <form>
            <input name="title" type="text" onChange={inputEvent} value={Note.title} placeholder="title" autoComplete="off"  />
            <textarea name="content" onChange={inputEvent} value={Note.content} cols="" rows="" placeholder="write a note" />
            <Button onClick={addEvent}>
                <AddIcon className="plius_sign"/>
            </Button>
        </form>
    </div>
    </>
  );
}

export default CreateNote;
