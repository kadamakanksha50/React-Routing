import './ForgotPassword.css';
import { Link } from 'react-router-dom';

function ForgotPassword(){
    return(
        <div className='forgot'>
            <img src='https://us.123rf.com/450wm/stuartphoto/stuartphoto1901/stuartphoto190100965/116118634-reset-password-button-to-redo-security-of-pc-new-code-for-securing-computer-3d-illustration.jpg'></img>
            <div className='contain'>
                <div className='title'>
                    <h2>Reset Password</h2>
                </div>
                <form>
                    <input type='email' placeholder='Username'></input>
                    <input type='password'  placeholder='New Password'></input>
                    <input type='password'  placeholder='Confirm Password'></input>
                    <input type='submit' value='Reset'></input>
                </form>
                <div className='click'>
                    <Link to='/'>Go back to login</Link>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword;