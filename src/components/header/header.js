import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'



function Header(props) {
    let name = "Entrar";
    
   
   return(
   
        <header>
            <div className='logo-site'>
                <Link to='/' >
                    <img alt='logo'/>
                </Link>
            </div>
            
            <nav className='navbar'>
                <div className='navbar-itens'>
                    <ul className='list'>
                        <div className=''>
                            <Link to='/cadastrar'>
                                <p>{name}</p>
                            </Link>
                            <a className='Favourites' href='f'>
                                <p>
                                    Meus Favoritos
                                </p>
                            </a>
                            <a className='Acount' href='a'>
                                <p>
                                    Conta
                                </p>
                            </a>

                        </div>

                    </ul>
                </div>
            </nav>
        <div>   
        <hr color="black" solid="true"/>
        </div>    
        </header>
        


);


}
export default Header


