import React,{useState} from 'react'
export default function TextForm(props)
{
    const[text,setText]=useState('This is a sample text')

    const handleUpClick =()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case Successfully !","success");
    }

    const handleLoClick =()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case Successfully !","success");
    }

    const handleCopy =()=>
    {
        let newText=document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied Successfully !","success");
    }
    
    const handleClear =()=>
    {
        setText('');
    }

    const handleExtra =()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange =(event)=>
    {
        setText(event.target.value)
    }

    return (
    <>
        <div className='container'style={{ color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{ backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black' }}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Upper</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To Lower</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtra}>Remove Extra Space</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
        </div>
        <div className='container my-3'style={{ color:props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>Time Required To Read : {0.008 * text.split(" ").length} Minutes</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter text above to preview"}</p>
        </div>
    </>
  )
}
