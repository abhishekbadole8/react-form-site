import React, { useState } from "react";

function Form() {
    const data = { name: "", email: "", password: "" }

    const [inputData, setInputData] = useState(data)
    const [select, setSelect] = useState(["HTML", "Css", "Js"])
    const [isButtonEnable, setButtonEnable] = useState(true);
    // const [subscribe, setSubscribe] = useState()

    function handelData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        if (inputData.name && inputData.email && inputData.password && (select.length > 0)) {
            setButtonEnable(false)
        }
    }

    const handleSelect = (e) => {
        if (select.includes(e.target.value)) {
            return
        }
        setSelect((prev) => {
            return [...prev, e.target.value]
        })
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

                    <select name="skills" id="skill" onChange={handleSelect}>
                        <option >Choose your skills</option>
                        <option name="python" value={inputData.python}>Python</option>
                        <option name="Bootstrap" value={inputData.Bootstrap}>Bootstrap</option>
                        <option name="Java" value={inputData.java}>Java</option>
                        <option name="C++" value={inputData.Cpp}>C++</option>
                    </select>

                </div>

                <div className="courseTag">

                    {select.map((data) => {
                        return <p>{data}</p>
                    })}

                </div>

                <button style={{ backgroundColor: isButtonEnable ? "none" : "green" }} onClick="{handelSubscribe}" type="submit" id="btn" >CLAIM YOUR FREE TRIAL</button>

                <p className="tac">By clicking the button you are agreeing to our Terms and Services</p>
            </form>

        </>
    )
}


export default Form