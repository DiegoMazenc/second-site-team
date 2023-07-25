import banniere from '../img/banniere.jpg';
import '../styles/Home.css'

const Home = () => {
    return (
        <div>

            <div className='topbanniere'>
                <img src={banniere} alt="banniere" className='imgbanniere' />
                <div className='titre'>
                    <h1 >LE BARIL</h1>
                    <p>La brasserie <br /> qui fait des bières <br /> qui déchirent (la gueule) </p>
                </div>
            </div>
        </div>
    )
}

export default Home;