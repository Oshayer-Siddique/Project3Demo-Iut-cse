//import "../BlogWriter.css";
import React, { useState } from 'react';
import axios from 'axios';

function BlogWriter() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setURL] = useState('');
  const [message, setMessage] = useState('');

  const width = 150;
  const height = width;

  const handleSubmit = (e) => {
    e.preventDefault();
    setURL("Hello World");
    const formData = { title, body, imageUrl };
    console.log(formData)
    setMessage('Please Wait');

    axios.post('http://localhost:5050/iut-cse/admin/uploadblog', formData)
      .then((response) => {
        console.log(response);
        console.log("Blog Sent");
        if (response.data) {
          setMessage(response.data)
          setTitle('')
          setBody('')
        }
        else {
          setMessage("Server Error")
        }
      })
      .catch((error) => {
        console.error('Error sending information:\n', error);
        setMessage("Server Error")
      });
  };

  const imgUpload = () => {
    try {
      let image = new Image();
      let cnv = document.getElementById("imgCanvas");
      let ctx = cnv.getContext("2d");
      ctx.fillStyle = "black";
      let f = document.querySelector("input[type='file']").files[0], url = window.URL || window.webkitURL, src = url.createObjectURL(f);
      image.src = src;
      setMessage("Incorrect file format");
      ctx.fillRect(0, 0, width, height);
      image.onload = function () {
        url.revokeObjectURL(src);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        if(image.width > image.height){
          ctx.drawImage(image, (width - (image.width/image.height) * width)/2, 0, (image.width/image.height) * width, height);
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(image, 0, (height - (image.height/image.width) * height)/2, width, (image.height/image.width) * height);
        }
        else{
          ctx.drawImage(image, 0, (height - (image.height/image.width) * height)/2, width, (image.height/image.width) * height);
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(image, (width - (image.width/image.height) * width)/2, 0, (image.width/image.height) * width, height);
        }
        
        setMessage("");
        setTimeout(() => { setURL(cnv.toDataURL()) }, 70);
      }
    }
    catch (err) {
      setMessage("Incorrect file format");
      console.log("Error in image");
    }


  }


  return (<div className='container'>
    <h1 className="text-center">New Blog</h1>
    <form onSubmit={handleSubmit} aria-disabled>
      <div className="text-center">
        <canvas className="border" id="imgCanvas" width={width} height={height}></canvas>
      </div>
      <div className="form-group">
        <input className="form-control" placeholder='Title' type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="form-group">
        <textarea className="form-control" placeholder='Enter blog body' name='body' value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <input className="form-control" type="file" onInput={imgUpload} required />
      </div>
      {message && <div className='text-center'>{message}</div>}
      <div className="form-group text-center">
        <button type="submit" className="btn btn-success">Submit</button>
      </div>
    </form>
  </div>);
}

export { BlogWriter };