import React, { useEffect } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaClosedCaptioning } from "react-icons/fa"
/**
 * @param {Boolean} OpenStatus
 * @param {String} text
 * @returns {HTMLElement}
 */
export default function Modal(props) {

    // Set the display of the modal 
   // const [open, setOpen] = useState(true);
 
  console.log (props.openstatus,props.text)
    return (
         <div>
       { props.openstatus ? (
            <ModalBg  className='modalBG'>
                <div className='modal'>
                    {props.text}
                    <button onClick={()=>{
                      document.getElementsByClassName('modalBG')[0].style.display = "none"
                     // props.openstatus = false;
                    }}> {FaClosedCaptioning} </button>
                </div>
            </ModalBg>
    
        ):(<ModalNone className='modalNone'>
            
            </ModalNone>)
    }
 </div>
    )
}

const ModalBg = styled.div`
display:flex;
background-color: blue;

`
const ModalNone = styled.div `
display: none;
`

Modal.propTypes = {
    text: PropTypes.string,
    OpenStatus: PropTypes.bool
}