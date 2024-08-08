// /pages/index.jsx

import React, { useState } from 'react'; // Importation de React et du hook useState
import ControleurActivite from '../composants/ControleurActivite'; // Importation du composant ControleurActivite

// Page principale du site
const Accueil = () => {
    const [activites, setActivites] = useState([]); // État pour stocker les activités

    return (
        <div>
            <h1>Activités de Team Building</h1>
            <ControleurActivite /> {/* Utilisation du composant ControleurActivite */}
        </div>
    );
};

export default Accueil; // Exportation du composant
