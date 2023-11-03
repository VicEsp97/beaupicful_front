import React, { useState, useEffect } from 'react';
import img from '../assets/img/camara.png';
import '../App.css'

function Contenido() {
    const texto = "C apturando momentos, creando recuerdos....";
    const [textoVisible, setTextoVisible] = useState('');
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < texto.length) {
                setTextoVisible((textoVisible) => textoVisible + texto[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 200); // Velocidad de la máquina de escribir (en milisegundos)
        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <body>
                <h1 className='letras-maquina'>
                    <div className="maquina-escribir">
                        {textoVisible}
                    </div>
                </h1>
                <div className="imagen2">
                    <img src={img} />
                </div>
            </body>

        </div>

    )
}

export default Contenido;