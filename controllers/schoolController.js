import connection from '../config/db.js';

// Controller to add a new school
export const addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validate the input data
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, address, latitude, longitude], (err, results) => {
        if (err) {
            console.error('Error adding school:', err.message);
            return res.status(500).json({ error: 'Failed to add school' });
        }
        res.status(201).json({ message: 'School added successfully', id: results.insertId });
    });
};

// Controller to list schools sorted by proximity
export const listSchools = (req, res) => {
    const { lat, lon } = req.query;

    // Check if latitude and longitude are provided
    if (!lat || !lon) {
        return res.status(400).json({ error: 'Latitude and Longitude are required' });
    }

    // Validate latitude and longitude to be numbers
    if (isNaN(lat) || isNaN(lon)) {
        return res.status(400).json({ error: 'Latitude and Longitude must be numbers' });
    }

    const query = `
        SELECT *, (
            6371 * acos(
                cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) +
                sin(radians(?)) * sin(radians(latitude))
            )
        ) AS distance
        FROM schools
        ORDER BY distance
    `;

    connection.query(query, [lat, lon, lat], (err, results) => {
        if (err) {
            console.error('Error fetching schools:', err.message);
            return res.status(500).json({ error: 'Failed to retrieve schools' });
        }
        res.status(200).json(results);
    });
};
