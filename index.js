const express = require('express');
const app = express();
const port = 3000;

// Fake data
const data = {
    "data": {
        "properties": {
            "name": "Example Company",
            "description": "This is an example company.",
            "address": "123 Example St, Example City, EX 12345"
        },
        "relationships": {
            "subsidiaries": {
                "items": [
                    {"properties": {"name": "Subsidiary 1"}},
                    {"properties": {"name": "Subsidiary 2"}},
                    {"properties": {"name": "Subsidiary 3"}}
                ]
            }
        }
    }
};

// API endpoint
app.get('/', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Fake Crunchbase API listening at http://localhost:${port}`);
});
