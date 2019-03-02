import React from 'react';
import { Navbar,Container,Input,NavbarBrand} from 'reactstrap';
import './Header.less';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import Logo from '../NASA_LOGO.gif';

export const Header = (props) =>{
    return(
        <Navbar>
            <Container className='header-container'>
                <Input style={{display: 'inline-block', width: "30%"}} className='search' type='text' name='search-title' placeholder='search something'/>
                <div className='col-4'>
                    <img className="img-responsive" style={{width:'20%'}} src={Logo} alt="Chania" />
                    <NavbarBrand href='/'>NASA</NavbarBrand>
                </div>
                <div style={{display: 'flex',justifyContent: 'space-between'}} className='button' >
                    <LoginModal buttonLabel="login" toggleRegister='' marginRight='10px' />
                    <RegisterModal buttonLabel="register" />
                </div>
            </Container>
        </Navbar>     
    );
};
