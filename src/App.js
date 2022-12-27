
import {useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);
 const displayModal=()=>{
  setOpen(true)
 }
  return (
    <div>
    <h2>Create Employee</h2>
         <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="text" />

            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="text" />

           
               </form>

<button onClick={displayModal}>Save</button>
<Modal 
openstatus={open}
text="Employee Created!"
/>
</div>

    
  );
}

export default App;
