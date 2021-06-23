import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './Navbar.scss';
import logo from '../../images/logo.png';
import { MenuContext } from '../../context/MenuContext';

export const Navbar = () => {

    const [menu, setMenu] = useState([]);
    const { setMenuglobal } = useContext(MenuContext);

    useEffect(() => {
        getMenus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const getMenus = async() => {

            try {
            const resp = await axios.get(process.env.REACT_APP_DEV_MENU_API_URL);
            const { data } = await resp;
            setMenu(data);
            setMenuglobal(data);
            }catch(err) {
              alert(`!UPS! Ocurrio un error con el servicio de menus, por favor vuelve a ingresar mas tarde, Error: ${err}`);
            }
    
      }

    return (
        <>
            <div className="contenedor">
                <div className="logo">
                    <img src={ logo } alt="Logo" />
                </div>
                <div className="menu">
                        <ul>
                            { menu.map( item => (
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
