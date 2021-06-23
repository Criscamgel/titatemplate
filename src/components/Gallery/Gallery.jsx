import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Gallery.scss';
import { MenuGallery } from './MenuGallery/MenuGallery';

export const Gallery = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages();
    }, [images])

    const getImages = async() => {
        try {
        const resp = await axios.get(process.env.REACT_APP_PROD_IMG_API_URL);
        const { data } = await resp;
        setImages(data);
        }catch(err) {
        alert(`!UPS! Ocurrio un error con el servicio de menus, por favor vuelve a ingresar mas tarde, Error: ${err}`);
        }
    }

    return (
        <>
          <div className="contenedorGallery">
              <MenuGallery></MenuGallery>
              <div className="gallery">
                
                <div className="row">
                    <div className="column">
                    { images.row1 &&                    
                        images.row1.map(image => (
                            <img src={image.value} alt="" />
                        ))
                        
                    }
                    </div>
                    <div className="column">
                    { images.row2 &&                    
                        images.row2.map(image => (
                            <img src={image.value} alt="" />
                        ))
                        
                    }
                    </div>
                    <div className="column">
                    { images.row3 &&                    
                        images.row3.map(image => (
                            <img src={image.value} alt="" />
                        ))
                        
                    }
                    </div>


              </div>
              <button className="negative">Show Me More</button>



          </div>
          </div>
        </>
    )
}
