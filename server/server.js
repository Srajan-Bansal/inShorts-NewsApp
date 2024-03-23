const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DATABASE, {family: 4})
    .then(() => console.log('DB connected'))
    .catch((err) => { console.log(`DB not connected`, err.message); })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listing to PORT: ${PORT}`);
})