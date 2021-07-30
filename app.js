const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const morgan = require('morgan')
const expressHandlebars = require('express-handlebars')

// Load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express();

// Logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', expressHandlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

// Listen
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))
