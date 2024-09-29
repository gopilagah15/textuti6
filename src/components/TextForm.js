import React, { useState } from 'react'

const TexthtmlForm = ({showAlert,heading}) => {

  const [text, settext] = useState('');
  const onChange=(e)=>{
    settext(e.target.value);
  }
 
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    settext(newText);
    console.log('upper case')
    showAlert('Converted to UpperCase' ,'success');
  }
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    settext(newText);
    showAlert('Converted to LowerCase' ,'success');
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    settext(newText.join(''));
    showAlert('Extra Spaces removed' ,'success');
  }
  const handleCopy=()=>{
    let newText = document.getElementById('myBox');
    navigator.clipboard.writeText(newText.value);
    showAlert('Text Copied' ,'success' );
  }
  const deleteText=()=>{
    let newText = '';
    settext(newText);
    showAlert('Text Deleted' ,'success');
  }

  return (
    <>
    <div className='container'>
        <h1 style={{marginTop:'30px'}}>{heading}</h1>
        <div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea value={text} onChange={onChange} className="form-control" id="myBox" rows="13"></textarea>
  </div> 
  <button type="button" className="btn btn-primary my-2 " onClick={handleUpClick}>ConvertToUpperCase</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>ConvertToLowerCase</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>REmove Spaces</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={deleteText}>Delete Text</button> 
    </div>
    <div className="container">
    <h4>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length}Words {text.length}Characters</h4>
    <h5>{0.008*text.split('').length}Minutes to read</h5>
    <p>{text.length>0?text:'Enter text to Preview'}</p>
    </div>
    </>
  )
}

export default TexthtmlForm
