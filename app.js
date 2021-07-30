const express = require('express');
const path = require('path')
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
app.engine('.hbs', expressHandlebars({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Static folder
app.use('/', express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))

// Listen
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))
