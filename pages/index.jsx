// /pages/index.jsx

import React, { useState } from 'react'; // Importation de React et du hook useState
import ControleurActivite from '../composants/ControleurActivite';


// Page principale du site
const Accueil = () => {
    const [activites, setActivites] = useState([]);

    return (
        <div>
            <h1>Activités de Team Building</h1>
            {activites && activites.length > 0 ? (
                activites.map((activite, index) => (
                    <div key={index}>{activite.nom}</div>
                ))
            ) : (
                <p>Aucune activité disponible pour le moment.</p>
            )}
        </div>
    );
};

export default Accueil; // Exportation du composant


