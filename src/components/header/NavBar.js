import React, {Component} from 'react';
import logo from '../../img/logo-nobg.png';
import './NavBar.css';
import '../cart/CartWidget';
import CartWidget from '../cart/CartWidget';


class NavBar extends Component{
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-dark justify-content-center header">
            <div class="header__inner">
              <div class="header__logo">
                <a class="navbar-brand" href="index.html"><img class="logo logo--header" src={logo}  alt="logo" /></a>
              </div>
    
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto header__menuBar">
                  <li class="nav-item header__listItems"><a class="header__itemLinks" href="html/autores.html">Autores</a></li>
                  <li class="nav-item header__listItems"><a class="header__itemLinks" href="html/descubre.html">Descubre</a></li>
                  <li class="nav-item header__listItems"><a class="header__itemLinks" href="html/obras-completas.html">Obras completas</a></li>
                  <li class="nav-item header__listItems"><a class="header__itemLinks" href="html/contacto.html">Contacto</a></li>
                  <li class="nav-item header__listItems"><CartWidget /></li>

                </ul>
    
              </div>
            </div>
          </nav>
        )
    }
}

export default NavBar;