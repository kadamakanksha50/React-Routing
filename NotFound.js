import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound(){
    return(
        <div className='notfound'>
            <img src='https://cdn.vectorstock.com/i/preview-1x/13/79/error-404-panda-surprise-page-not-found-template-vector-20741379.jpg'></img>
            <h1>Oops!!</h1>
            <h3>The page you are looking for could not be found.</h3>
            <Link to="/Dashboard">Back to Home</Link>
        </div>
    )
}
export default NotFound;