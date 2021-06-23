import React, { createContext, useState } from 'react';

export const MenuContext = createContext();


export const MenuProvider = (props) => {

    const [menuGlobal, setMenuglobal] = useState();
    
    return (
        <MenuContext.Provider
            value={{
                menuGlobal,
                setMenuglobal
            }}
        >
            { props.children }
        </MenuContext.Provider>
    )
}
