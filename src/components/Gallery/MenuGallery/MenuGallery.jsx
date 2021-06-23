import React, { useContext } from 'react';
import { MenuContext } from '../../../context/MenuContext';
import './MenuGallery.scss';

export const MenuGallery = () => {

    const { menuGlobal } = useContext(MenuContext);    
    
    return (
        <div className="menuGalleryContainer">
            {
                menuGlobal &&
                <ul>
                { menuGlobal.map(item => (
                    <li
                    className={`item-${item.key}`}
                    key={item.key}
                    ><p>{item.value}</p></li>
                ))}
            </ul>
            }
            
        </div>
    )
}
