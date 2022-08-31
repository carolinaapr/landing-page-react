import React from "react";

export default function Contactus() {
    return(
        <div style={{textAlign:"center"}}>
        <h1>CONTACT US</h1>
        <p>Do you have any questions for partnership and media? Please do not hesitate to contact us directly.</p>
        <form style={{textAlign:"left"}}>
            <label>Name</label>
            <input type="text" name="name"/>
            <label>Email</label>
            <input type="email" name="user_email"/>
            <label>Message</label>
            <textarea name="Message" rows="5"/>
            <input type="submit" value="send"/>
        </form>
        </div>
    )
}