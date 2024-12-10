const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.')); // Serve static files from the current directory

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});