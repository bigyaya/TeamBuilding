// /pages/api/activites/index.js

import dbConnect from '../../../utils/dbConnect';
import Activite from '../../../modeles/Activite';

dbConnect();

const obtenirActivites = async (req, res) => {
    try {
        const activites = await Activite.find({});
        res.status(200).json({ success: true, activites });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};

export default obtenirActivites;
