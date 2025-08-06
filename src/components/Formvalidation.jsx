import React, { useSyncExternalStore } from 'react'
import { useState } from 'react'
const Formvalidation = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const [userNameError, setUserNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    
    const [userNameColor, setUserNameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    const validate =(e)=> {
        e.preventDefault();

        if (userName.length >7) {
            setUserNameColor('green')
            setUserNameError('')
         } else{
        
            setUserNameColor('red')
            setUserNameError('UserName must be atleast 8 characters long')
            }
        if (email.includes("@")&& email.includes(".com")){
            setEmailColor('green')
            setEmailError('')
        } else {
            setEmailColor('red')
            setEmailError('Enter a proper email ex: abc@gmail.com')
        }
        if (password>6){
            setPasswordColor('green')
            setPasswordError('')
        }else {
            setPasswordColor('red')
            setPasswordError("password must be atleast 7 characters long")
        }
        if (confirmPassword == password){
            setConfirmPasswordColor('green')
            setConfirmPasswordError('')
        }else {
            setConfirmPasswordError(`Passwords don't match`)
            setConfirmPasswordColor('red')
        }
        
        }
        
        
    
    


  return (
  <>
    <div className="card">
        <div className="card-image">

        </div>
            <form>
                <input 
                type='text'
                placeholder='Username here'
                value={userName}
                style={{borderColor: userNameColor}}
                onChange={(e)=> setUserName(e.target.value)}
                />
                <p className="error"> {userNameError}</p>

                <input 
                type='email'
                placeholder='Email here'
                value={email}
                style={{borderColor: emailColor}}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <p className="error"> {emailError}</p>
                <input 
                type='password'
                placeholder='password'
                value={password}
                style={{borderColor: passwordColor}}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <p className="error"> {passwordError}</p>
                <input 
                type='password'
                placeholder='confirm password'
                value={confirmPassword}
                style={{borderColor: confirmPasswordColor}}
                onChange={(e)=> setConfirmPassword(e.target.value)}
                />
                <p className="error"> {confirmPasswordError}</p>
                <button className="submit-btn" onClick={validate}>
                    Submit    
                </button>
            </form>
    </div>

  </>  
)
}

export default Formvalidation