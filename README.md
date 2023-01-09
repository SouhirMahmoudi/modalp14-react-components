*************Installation************
To install, you can use npm or yarn:

$ npm i modalp14-react-components

$ yarn i modalp14-react-components

**********Usage**********************

- Here's an example of basic usage:

import React from "react";

import { useState } from "react";

import { Modal } from "modalp14-react-components";


function App() {
//status of modale :Open's default value is false, when open become true, modal is display:

   const [open, setOpen] = useState(false);

//function display modal, it change open to true:

   const displayModal = () =>
    {
      setOpen(true)
    }

return(
    
    <div>
       <Modal openstatus={open} text="add your text here" /> 
       <button onClick={DisplayModal}>openModal</button> 
    </div> 
    
)
}
 


