import NavBar from './NavBar';
import './Header.css'

export default function Header(props) {
    const { pickImage } = props;
    return (
        <header className='header-nav'>
            <h1>John Hur</h1>
            <NavBar pickImage={pickImage}/>
        </header>
    )
}