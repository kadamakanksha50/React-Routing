import Dashboard from '../Dashboard';
import './Services.css';

function Services(){
    return(
        <div>
            <Dashboard></Dashboard>
            <div className='service-container'>
                <h1>Our Services</h1>
                <div className="content">
                    <div className="card1">
                        <img src='https://img.freepik.com/free-photo/plant-stucco-wall-background-zoom-calls_23-2149684466.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712275200&semt=ais'></img>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste pariatur non sequi nam aspernatur voluptatibus similique ut explicabo, quia, dolorum temporibus saepe nihil? Repellat, ea consequatur fugit sapiente nostrum blanditiis!</p>
                    </div>
                    <div className="card1">
                        <img src='https://img.freepik.com/free-photo/view-vintage-camera-device-nutshell-tones_23-2151208111.jpg?size=626&ext=jpg&ga=GA1.1.1571556895.1696181991&semt=ais'></img>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste pariatur non sequi nam aspernatur voluptatibus similique ut explicabo, quia, dolorum temporibus saepe nihil? Repellat, ea consequatur fugit sapiente nostrum blanditiis!</p>
                    </div>
                    <div className="card1">
                        <img src='https://img.freepik.com/premium-photo/fall-season-product-display-with-concrete-studio-background-orange-concrete-texture-yellow-floor_908985-58186.jpg?size=626&ext=jpg&ga=GA1.1.1571556895.1696181991&semt=ais'></img>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste pariatur non sequi nam aspernatur voluptatibus similique ut explicabo, quia, dolorum temporibus saepe nihil? Repellat, ea consequatur fugit sapiente nostrum blanditiis!</p>
                    </div>
                    <div className="card1">
                        <img src='https://img.freepik.com/free-psd/decorative-objects-old-books-vases-black-wall-japanese-style_176382-56.jpg?w=1060&t=st=1712315289~exp=1712315889~hmac=6fc2d370af4b038554b0fe2ec738a5611bebb2ff4d1b0e8be3cbe64942c76f9e'></img>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste pariatur non sequi nam aspernatur voluptatibus similique ut explicabo, quia, dolorum temporibus saepe nihil? Repellat, ea consequatur fugit sapiente nostrum blanditiis!</p>
                    </div>
                </div>
            </div>       
        </div>
    )
}
export default Services;