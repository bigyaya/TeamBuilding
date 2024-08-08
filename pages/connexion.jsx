// /pages/connexion.jsx

import React, { useState } from 'react'; // Importation de React et du hook useState
import axios from 'axios'; // Importation d'Axios pour les requêtes HTTP

// Page de connexion
const Connexion = () => {
    const [email, setEmail] = useState(''); // État pour stocker l'email
    const [motDePasse, setMotDePasse] = useState(''); // État pour stocker le mot de passe

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        try {
            // Envoi des données de connexion à l'API
            await axios.post('/api/connexion', { email, motDePasse });
            alert('Connexion réussie'); // Affiche une alerte en cas de succès
        } catch (error) {
            console.error(error); // Affiche l'erreur dans la console
            alert('Échec de la connexion'); // Affiche une alerte en cas d'échec
        }
    };

    return (
        <div>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email} // Lier la valeur de l'input à l'état local
                    onChange={(e) => setEmail(e.target.value)} // Met à jour l'état local à chaque changement
                    placeholder="Email"
                    required // Champ obligatoire
                />
                <input
                    type="password"
                    value={motDePasse} // Lier la valeur de l'input à l'état local
                    onChange={(e) => setMotDePasse(e.target.value)} // Met à jour l'état local à chaque changement
                    placeholder="Mot de passe"
                    required // Champ obligatoire
                />
                <button type="submit">Se connecter</button> {/* Bouton pour soumettre le formulaire */}
            </form>
        </div>
    );
};

export default Connexion; // Exportation du composant
