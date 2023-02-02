import React, { useState } from 'react'
import  { object, number, string,  }  from 'yup'

function Form() {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})

     const formSchemer = object() ({
         firstName: string().min(2, 'Name is too short').max(20, 'name is too long').required('Please fill out this field'),
         lastName: string().min(2, 'Name is too short').max(20, 'name is too long').required('Please fill out this field'),
         email: string().email('Invalid email').required('Please fill out this field'),
         phonenumber: number().required('Please enter your phone Number'),
         age: number().min(18).max(65).required('Please enter your phone Number'),
         password: string().min(8, 'The minimum character is 8').max(15, 'The maximum character is 15'),
         message: string().min(100, 'The minimum character is 100').max(450, 'The maximum character is 450')
    })
  return (
    <div>
      <form >
        <p>
            <input name='firstName' type='text'  placeholder='FirstName' value={formData.firstName}/>
        </p>
        <p>
            <input name='lastName' type='text'  placeholder='LastName' value={formData.lastName}/>
        </p>
        <p>
            <input name='phonenumber' type='number'  placeholder='PhoneNumber' value={formData.phonenumber}/>
        </p>
        <p>
            <input name='age' type='number'  placeholder='Age' value={formData.age}/>
        </p>
        <p>
            <input name='email'  type='text'  placeholder='Email' value={formData.email}/>
        </p>
        <p>
            <input name='password' type='password'  placeholder='Password' value={formData.password} />
        </p>
        <p>
            <textarea name='message' placeholder='Message' value={formData.message}/>
        </p>
           <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form