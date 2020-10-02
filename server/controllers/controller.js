module.exports = {
    getInventory(req, res) {
        const db = req.app.get('db');

        db.get_inventory()
         .then(products => res.status(200).send(products))
         .catch(err => {
             res.status(500).send({ errorMessage: 'Oops... Something went wrong on our end. We will look into it' });
              console.log(err);
          })
    },
    addProduct(req, res) {
        const db = req.app.get('db');
        const {name, price, img} = req.body;

        db.create_product({name, price, img})
        .then((products) => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({ errorMessage: 'Oops... Something went wrong on our end. We will look into it' });
            console.log(err);
        })
    },
    deleteProduct(req, res) {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product([id])
        .then((products) => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({ errorMessage: 'Oops... Something went wrong on our end. We will look into it' });
            console.log(err);
        })
    },
    editProduct(req, res) {
        const db = req.app.get('db');
        const {id} = req.params;
        const {name, price, img} = req.body;

        db.update_product({name, price, img, id})
        .then((products) => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({ errorMessage: 'Oops... Something went wrong on our end. We will look into it' });
            console.log(err);
        })
    }
}