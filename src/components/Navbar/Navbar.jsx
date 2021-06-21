import React from 'react';
import './Navbar.scss';
import logo from '../../images/logo.png';

export const Navbar = () => {

    const items = [
                    {key: 1, value:'All'},
                    {key: 2, value:'Branding'}, 
                    {key: 3, value:'Web'}, 
                    {key: 4, value:'Photography'}, 
                    {key: 5, value:'app'}]

    return (
        <>
            <div className="contenedor">
                <div className="logo">
                    <img src={ logo } alt="Logo" />
                </div>
                <div className="menu">
                        <ul>
                            { items.map( item => (
                                <li
                                  className={`item-${item.key}`}
                                  key={item.key}
                                ><p>{item.value}</p></li>
                            )) }
                            <li className="search">
                                <i className="fa fa-search"/>
                                <input type="text" />
                            </li>
                        </ul>
                </div>
            </div>
        </>
    )
}
