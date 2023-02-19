import React from "react";
import Form from "./Form";


function Page() {
    return (
        <div className="mainDiv">

            <div className="textContainer">
                <h1>Learn to code by watching others</h1>
                <p className="para">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </div>

            <div className="formBox">

                <div className="block">Try it free 7 days then ₹180/mo. thereafter</div>
                <Form />

            </div>
        </div>
    )
}


export default Page;