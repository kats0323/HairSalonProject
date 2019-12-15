const router = require("express").Router();
let Price = require("../models/price.model")

router.route("/").get((req, res) => {
    Price.find()
        .then(prices => res.json(prices))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
    const course = req.body.course;
    const price = req.body.price;


    const newPrice = new Price({
        course,
        price
    })

    newPrice.save()
        .then(() => res.json("Prices added"))
        .catch(err => res.status(400).json("Error: " + err));

});
router.route('/:id').get((req, res) => {
    Price.findById(req.params.id)
        .then(price => res.json(price))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Price.findByIdAndDelete(req.params.id)
        .then(() => res.json('Price deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Price.findById(req.params.id)
        .then(price => {
            price.course = req.body.course;
            price.price = req.body.price;


            price.save()
                .then(() => res.json('Price updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;