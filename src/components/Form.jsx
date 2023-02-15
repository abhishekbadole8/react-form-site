import React, { useState } from "react";

function Form() {
    const data = { name: "", email: "", password: "" }

    const [inputData, setInputData] = useState(data)
    const [isButtonEnable, setButtonEnable] = useState(true);

    function handelData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })

        if (inputData.name && inputData.email && inputData.password) {
            setButtonEnable(false)
        }
    }

    function handelSubmit(e) {
        e.preventDefault();

    }

    return (
        <>

            <form className="formContainer" onSubmit={handelSubmit}>

                <div className="inputBox">
                    <input onChange={handelData} type="text" placeholder="Name"
                        name="name" value={inputData.name} />

                    <input onChange={handelData} type="email" placeholder="Email Address"
                        name="email" value={inputData.email} />

                    <input onChange={handelData} type="password" placeholder="Password"
                        name="password" value={inputData.password} />

                    {/* <input onChange={handelData} type="text" placeholder="Choose your skills" name="skills" /> */}
                    <label value="skills" className="dropDown"></label>
                    <select name="skills" id="skill">
                        <option value="">Choose your skills</option>
                        <option value="python">Python</option>
                        <option value="Bootstrap">Bootstrap</option>
                        <option value="Java">Java</option>
                        <option value="C++">C++</option>
                    </select>
                </div>

                <div className="courseTag">
                    <p className="spanPara">HTML<span>x</span></p>
                    <p className="spanPara">CSS<span>x</span></p>
                    <p className="spanPara">JS<span>x</span></p>
                </div>

                <button style={{ backgroundColor: isButtonEnable ? "none" : "green" }} type="submit" id="btn" >CLAIM YOUR FREE TRIAL</button>

                <p className="tac">By clicking the button you are agreeing to our Terms and Services</p>
            </form>

        </>
    )
}

export default Form;