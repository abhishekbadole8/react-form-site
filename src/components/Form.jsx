import React, { useState } from "react";

function Form() {
    const onMouseOver = false;
    // const [name, email, password] = false
    const [name, setName] = useState("")
    const [headingName, setHeadingName] = useState("")
    const [allOkay, isAllOkay] = useState("false")


    function handelChange(event) {
        console.log(event.target.value)
        setName(event.target.value)
    }

    function handelClick(event) {
        setHeadingName("Hello: " + name)
        event.preventDefault();
    }

    return (
        <>
            <h1>{headingName}</h1>

            <div className="formContainer">

                <div className="inputBox">
                    <input onChange={handelChange} type="text" placeholder="Name" name={name} />
                    <input onChange={handelChange} type="email" placeholder="Email Address" />
                    <input onChange={handelChange} type="password" placeholder="Password" />
                    <input onChange={handelChange} type="text" placeholder="Choose your skills" />
                </div>

                <div className="courseTag">
                    <p className="spanPara">HTML<span>x</span></p>
                    <p className="spanPara">CSS<span>x</span></p>
                    <p className="spanPara">JS<span>x</span></p>
                </div>

                <button type="submit" id="btn" onClick={handelClick}>CLAIM YOUR FREE TRIAL</button>

                <p className="tac">By clicking the button you are agreeing to our Terms and Services</p>
            </div>

        </>
    )
}

export default Form;