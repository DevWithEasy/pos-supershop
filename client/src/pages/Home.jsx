import axios from 'axios';
import Cart from '../components/Cart';
import Heading from '../components/Heading';

const Home = () => {

    return (
        <div className='p-2'>
            <Heading>Home</Heading>
            <Cart/>
        </div>
    );
};

export default Home;