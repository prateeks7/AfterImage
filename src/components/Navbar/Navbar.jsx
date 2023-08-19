import logo from '../../assets/logo.png';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(props)
{
    return(
        <div className='d-flex justify-content-between border-bottom sticky-top bg-black'>
            <Link to='/'>
                <div className='p-3'>
                    <img src="https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg" alt='logo' className='img-fluid logoSize' />
                </div>
            </Link>
            <Link to={props.children === 'Create' ? '/Create' : '/'}>
            <div className='p-4'>
                <button type="button" className="btn navBtnCss btn-lg">{props.children}</button>
            </div>
            </Link>
        </div>
    );
}

export default Navbar;