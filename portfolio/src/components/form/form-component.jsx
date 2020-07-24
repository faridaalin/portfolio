import React, {useRef}  from 'react';
import styled from 'styled-components'


import './form.styles.css'

 const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
    `;




function Form() {

    //if input field is in focus && if input field has length > 0
    // add style
   

    const handleSubmit = ( event) => {
        event.preventDefault()
        // console.log(data)
    }


    return(
        <form onSubmit={handleSubmit}>
            <Div>
            <label htmlFor="name" >Name</label>
            <input className="input" type="text" name="name" id="name" />

            </Div>

            <Div>
            <label htmlFor="email">Email</label>
            <input className="input" type="email" name="email" id="email"/>
            </Div>


            <Div>
            <label htmlFor="message">Message</label>
            <textarea className="input"  name="message" id="message" cols="30" rows="10"></textarea>
            </Div>

            <div className="btn-container">
                <input className="btn-send" type="submit" value="Submit"/>
                <i id="btn-arrow-right" className="material-icons">
                arrow_right_alt
             </i>
            </div>  

        </form>
    )

}

export default Form;