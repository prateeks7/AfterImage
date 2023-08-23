import logo from '../assets/logo.png';
import './styles/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(props)
{
    return(
        <div className='d-flex justify-content-between border-bottom sticky-top bg-black'>
            <Link to='/AfterImage/'>
                <div className='p-3'>
                    <img src={logo} alt='logo' className='img-fluid logoSize' />
                </div>
            </Link>
            <Link to={props.children === 'Create' ? '/AfterImage/Create' : '/AfterImage/'}>
            <div className='p-4'>
                <button type="button" className="btn navBtnCss btn-lg">{props.children}</button>
            </div>
            </Link>
        </div>
    );
}

export default Navbar;