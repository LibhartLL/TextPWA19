const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/src'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

// app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
app.listen(PORT, () => console.log(`\n\n\n🚀  Live API: \x1b[34mhttp://localhost:${PORT}/\x1b[0m 🚀\n\n`));
// console.log(`${activity}`);
// console.log(`🚀  Live API: \x1b[34mhttp://localhost:${PORT}/api\x1b[0m 🚀\n\n`);
