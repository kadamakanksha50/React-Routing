import Dashboard from '../Dashboard';
import './Contact.css';

function Contact(){
    return(
        <div>
            <Dashboard></Dashboard>
            <div className='contact-container'>
                <h1>Contact US</h1>
                <div className="contact">
                <form>
                    <div className="element">
                        <div className="input-field">
                            <label>First Name</label>
                            <input type="text" name='first' placeholder="First name"></input>
                        </div>
                        <div className="input-field">
                            <label>Last Name</label>
                            <input type="text" name='last' placeholder="Last name"></input>
                        </div>
                    </div>
                    <div className="element">
                        <div className="input-field">
                            <label>Email Address</label>
                            <input type="email" name='email' placeholder="john@gmail.com"></input>
                        </div>
                        <div className="input-field">
                            <label>Mobile No</label>
                            <input type="number" name='mobile' placeholder="0123456789"></input>
                        </div>
                    </div>
                    <div className="element1">
                        <div className="input-field">
                            <label>Requirements</label>
                            <textarea className="tx"></textarea>
                        </div>
                    </div>
                    <div className="btn">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}
export default Contact;