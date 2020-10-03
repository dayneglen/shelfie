require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controllers/controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})

app.get(`/api/inventory/:id`, ctrl.getProduct);
app.get('/api/inventory', ctrl.getInventory);
app.post('/api/product', ctrl.addProduct);
app.delete('/api/product/:id', ctrl.deleteProduct);
app.put('/api/product/:id', ctrl.editProduct);

app.listen(SERVER_PORT, () => console.log(`Port is up on ${SERVER_PORT}`));