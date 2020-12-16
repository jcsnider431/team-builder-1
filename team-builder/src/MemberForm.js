import React from 'react'

export default function MemberForm(props) {
    const{ values, update, submit} = props

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name,value);
    };
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <form  onSubmit = {onSubmit}>
        <div>
            <label>Name 
                <input name= "name" type="text" maxLength="20" placeholder="name" value= {values.name} onChange={onChange} ></input>
            </label>
            <label>Email 
                <input name= "email" type= "text" maxLength= "50" placeholder="email" value={values.email} onChange={onChange} ></input>
            </label>
            <label>Title
                <select name='role' value={values.role} onChange={onChange}>
                <option value=''></option>
                <option value='instructor'>instructor</option>
                <option value='student'>Student</option>
                <option value='tl'>Team Lead</option>
            
          </select>
          </label>
            <div>
                <button>Submit</button>
            </div>
        </div>
        </form>
    )
}
