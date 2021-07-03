import React from 'react'
import "./Form.css";

const Form = () => {

    const handlesubmit = () => {
        document.getElementById('content').innerHTML = "File uploaded";
    }


    return (
        <div >
            <form action="" className="frm" onSubmit={handlesubmit}>
                <label for="img">Select image(Aadhar/Passport/Any Government ID):</label>
                <input type="file" id="img" name="img" accept="image/*" />
                <button className="btn" type="submit">Submit</button>
                <h3 id="content"></h3>
            </form>

        </div>
    )
}

export default Form
