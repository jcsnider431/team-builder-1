import React, { useState } from 'react'
import MemberForm from './MemberForm'
import Member from './Member'



const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue});
  }


  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
  
    if (!newMember.name || !newMember.email || !newMember.role) return;
      setMembers(members.concat(newMember));
      setFormValues(initialFormValues);
    
  
  }



  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        <MemberForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
          />
          
          {members.map( person => {
           return <Member key={person.id} details={person} />
           
          })
          }
        
      {/* </header> */}
    </div>
  );
}

export default App;
