import React, {useState} from 'react'

export default function TextForm(props) {
    // useState syntax that passes two variable one text and 2nd is set text 
    const [text,setText]= useState ("");
    // handler to convert Upper Case 
    const handleUpclick = () => {
        console.log("Convert to upper case");
        let newText=text.toUpperCase();
        setText(newText);
    }
    // handler to edit text on the field  
    const handleonchange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    // handler to Clear Text 
    const handlecleartext = () => {
        console.log("Text Cleared");
        let newText='';
        setText(newText);
    }
    // handler to convert Lower Case 
    const handlelowclick = () => {
        console.log("Convert to lower case");
        let newText=text.toLocaleLowerCase();
        setText(newText);
    }

    
  return (
    <div>
      <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'grey':'dark'}} id="exampleFormControlTextarea1" rows="8" name='texbox' value={text} onChange={handleonchange}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpclick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handlelowclick}>Convert To LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handlecleartext}>Clear Text</button>



        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words {text.length} characters</p>
            <h2>{props.readtime}</h2>
            <p>{0.008 * text.split(" ").length} Minutes</p>
            <h2>{props.preview}</h2>           
            <p className='preview-text'>{text.length>0?text:"Enter Something to preview"}</p>
          
        </div>
    </div>
  )
}
