const express = require('express');
const app = express();
const port = 3000;

// Fake data
const data = {
    "ExCompany": {
        "properties": {
            "companyName": "Example Company",
            "description": "This is an example company.",
            "address": "123 Example St, Example City, EX 12345"
        },
        "relationships": {
            "subsidiaries": {
                "items": [
                    {"properties": {"name": "Apple"}},
                    {"properties": {"name": "Google"}},
                    {"properties": {"name": "Facebook"}}
                ]
            }
        }
    }
};

// API endpoint
app.get('/', (req, res) => {
    const companyName = req.query.name;

    // Check if the company name matches the data
    if (companyName && data[companyName]) {
        res.json(data[companyName]);
    } else {
        res.status(404).json({ message: 'Company not found' });
    }
});

app.listen(port, () => {
    console.log(`Fake Crunchbase API listening at http://localhost:${port}`);
});
