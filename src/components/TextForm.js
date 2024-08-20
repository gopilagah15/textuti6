import React from 'react'

const TexthtmlForm = (props) => {
  return (
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="13"></textarea>
  </div>
    </div>
  )
}

export default TexthtmlForm