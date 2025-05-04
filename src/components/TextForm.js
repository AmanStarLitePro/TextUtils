import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("Uppercase was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(`${text.length > 0 ? "Converted to UpperCase" : "Enter Something in the Text Box to convert it to UpperCase" }`, "success");
    }

    const handleLowClick = () => {
        // console.log("Uppercase was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(`${text.length > 0 ? "Converted to LowerCase" : "Enter Something in the Text Box to convert it to lowercase" }`, "success");
    }

    const handleCleClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert(`${text.length > 0 ? "Text Cleared!" : "It's Already Cleared!" }`, "success");
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(`${text.length > 0 ? "Extra Spaces Removed" : "Enter Something in the Text Box to remove extra spaces" }`, "success");
    }

    const handleInverseClick = () => {
        let result = ''
        for(let i=0; i<text.length; i++){
            const char = text[i];
            if(char === char.toUpperCase()){
                result += char.toLowerCase();
            }
            else{
                result += char.toUpperCase();
            }
        }
        setText(result);
        props.showAlert(`${text.length > 0 ? "Text Inverted!" : "Enter Something in the Text Box to invert it" }`, "success");
    }

    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCleClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleInverseClick}>Inverse Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.length > 0 ? text.split(" ").filter(word => word.trim() !== "").length : 0} words, {text.length} characters</p>
            <p>{text.length > 0 ? 0.008 * text.split(" ").length : 0} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter Something in the Text Box above to Preview it Here" }</p>
        </div>
    </>
    )
}