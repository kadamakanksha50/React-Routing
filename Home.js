import Dashboard from '../Dashboard';
import './Home.css';

function Home(){
    return(
        <div>
            <Dashboard></Dashboard>
            <div className='home-container'>
                <h1>Welcome to our Website</h1>
                <h2>We. build</h2>
                <h3>your online presence:</h3>
            </div>
        </div>
    )
}
export default Home;