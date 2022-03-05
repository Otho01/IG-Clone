import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FireBaseContext from '../context/firebase';

export default function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FireBaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';
  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'></div>
  );
}
