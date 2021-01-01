import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const AddEvent = () => {
    const [infoFile, setInfoFile] = useState(null)
    const [info, setInfo] = useState([])
    console.log(info);
    

    const handleBlur = (e) =>{
        const newInfo = [...info]
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo) 
    }
    const handlefileChange = (e) => {
        const newFile = e.target.files[0]
        console.log(newFile);
        setInfoFile(newFile)
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', infoFile)
        formData.append('title', info.title)
      
        fetch('http://localhost:5000/addTask', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }
    return (
        <div className='row'>
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Event Title</label>
                        <input onBlur={handleBlur} class="form-control" type="text" name="title" placeholder="Event Title" />

                        <label for="exampleFormControlFile1">Chose a image</label>
                        <input onChange={handlefileChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;