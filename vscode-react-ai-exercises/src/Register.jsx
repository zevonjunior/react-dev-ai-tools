import  {useState} from 'react';
import './App.css';
function Register() {


const [username, setUsername] = useState('');
const [mobile, setMobile] = useState('');
// 2 state items for  username and mobile error
const [usernameError, setUsernameError] = useState('');
const [mobileError, setMobileError] = useState('');


  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>
          Username:
          <input
           type="text"
           name="username"
           value={username}
           onChange={e => {
            const uservalue = e.target.value;
            setUsername(uservalue);
            // validate that the username is at least 8 characters long, with at least one lowercase letter, one uppercase character, 1 number and 1 special character (e.g. !@#$%^&*) regex
            const userRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if (!userRegex.test(uservalue)) {
              console.log('Username is invalid');
              setUsernameError('Bad user name');
            } else {
              console.log('Username is valid');
              setUsernameError('');
            }
          }}
             />
          { usernameError && <p style={{color: "red"}}>{usernameError}</p> }
        </label>
        <label>
          UK Mobile Number:
          <input
            type="tel"
            name="mobile"
            value={mobile}
            onChange={e => {
              const mobilevalue = e.target.value;
              setMobile(mobilevalue);
              // validate that the mobile number is a UK number (starts with 07 and is 11 digits long) regex
              const mobileRegex = /^07\d{9}$/;
              if (!mobileRegex.test(mobilevalue)) {
                console.log('Mobile number is invalid');
                setMobileError('Wrong number, dude!');
              } else {
                console.log('');
                setMobileError('');
              }



            }}
            />
          { mobileError && <p style={{color: "hotpink"}}>{mobileError}</p> }
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register;