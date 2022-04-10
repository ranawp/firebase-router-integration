import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInwithGoogle } = useFirebase();
    return (
        <div>
            <h1>Please login</h1>
            <div style={{ margin: '20' }}>
                <button onClick={signInwithGoogle}>Google Sign in </button>
            </div>
            <form>

                <input type="email" placeholder='Your Email' /> <br />
                <input type="passowrd" name='' placeholder='passowrd' /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;