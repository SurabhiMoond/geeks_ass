import { useState } from 'react';
import { UserLogin } from './UserLogin';
import { MovieList } from './MovieList';
import { Navigate, useNavigate } from 'react-router-dom';

export const UserSign = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [sign, isSingIn] = useState(false);
  const [signUp, isSignUp] = useState(false);
  const [useLogin, isUserLogin] = useState(false);
  const navigate=useNavigate();
  const professions = [
    'Engineer',
    'Designer',
    'Developer',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, password, email, phone };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Signup successful. Please login.');
    isUserLogin(true);
    setName('');
    setEmail('');
    setPassword('')
    setPhone('')
  };
  const handleSignInBtn = () => {
    // isSingIn(true);
    navigate('/userLogin');
  }
  const handleSignUpBtn = () => {
    isSignUp(true);
  }
  return (
<>
      {useLogin | signUp ? (<MovieList/>) :( <div className='useSignUp'>
      <h4 style={{textAlign:'center'}}>User Signup</h4>
      <form onSubmit={handleSubmit}>
       
          <label>Name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Type name'
            required
          />
       <br></br>
          <label>Password  </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Type password'
            required
          />
      <br />
          <label>Email   </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Type email'
            required
          />
        <br />
          <label>Phone Number  </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Type Phone number'
            required
          />
        <br />
          <label>Profession   </label>
          <select value={profession} onChange={(e) => setProfession(e.target.value)}>
            {professions.map((prof, index) => (
              <option key={index} value={prof}>
                {prof}
              </option>
            ))}
          </select>
       
      <div style={{marginTop:'5px'}}>  <button type="submit">Sign up</button></div>
      </form>
      <hr />
      <div style={{marginTop:'-5px',lineHeight:'0',paddingBottom:'10px'}}>
      <h5>Already have an account?</h5>
      <button onClick={handleSignInBtn}>Sign in</button>
      </div>
      
      {/* {
        sign && <UserLogin/>
      } */}
    </div>
      )
    }
      </>
  );

};
