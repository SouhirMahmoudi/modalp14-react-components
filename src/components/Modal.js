import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/**
 * @param {Boolean} openstatus
 * @param {String} text
 * @returns {HTMLElement}
 */
export default function Modal(props) {

    // Set the display of the modal 
    // const [open, setOpen] = useState(true);

   // console.log(props.openstatus, props.text)
    return (
        <div>
            {props.openstatus ? (
                <ModalBg className='modalBG'>
                    <ModalContent>
                        <ModalBody>
                            <ModalText> {props.text} </ModalText>
                            <ModalButton onClick={() => {
                                document.getElementsByClassName('modalBG')[0].style.display = "none"
                            }}>  <FontAwesomeIcon className="fa" icon={faClose} /> </ModalButton>
                        </ModalBody>
                    </ModalContent>
                </ModalBg>

            ) : (<ModalNone className='modalNone'>

            </ModalNone>)
            }
        </div >
    )
}

const ModalBg = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgb(58 59 66 / 40%);

`
const ModalNone = styled.div`
  display: none;
`
const ModalContent = styled.div`
  margin: 17% auto;
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  color:#232323;
  padding-top: 10px;
  height:50px;
`
const ModalBody = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 99%;
  z-index: inherit;
`
const ModalText = styled.div`
  font-size: 22px;
  padding-left:5%;
`
const ModalButton = styled.button`
   margin-top: -5%;
   margin-right: -5%;
   position: relative;
   z-index: 2;
   background: black;
   border-radius: 50%;
   border-color: transparent;
   width: 40px;
   height:40px;
   .fa{
    font-size: 20px;
    font-weight: bold;
    color:white;
   
   }
 
`
Modal.propTypes = {
    text: PropTypes.string,
    OpenStatus: PropTypes.bool
}
Modal.defaultProps = {
    openstatus: false,
    text: "",
  };