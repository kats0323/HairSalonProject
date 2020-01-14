const router = require("express").Router();
let Price = require("../models/price.model")

router.route("/").get((req, res) => {
    Price.find()
        .then(prices => res.json(prices))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
    const ja_course = req.body.ja_course;
    const en_course = req.body.en_course;
    const price = req.body.price;
    const ja_detail = req.body.ja_detail;
    const en_detail = req.body.en_detail;

    const newPrice = new Price({
        ja_course,
        en_course,
        price,
        ja_detail,
        en_detail
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
            price.ja_course = req.body.ja_course;
            price.en_course = req.body.en_course;
            price.price = req.body.price;
            price.ja_detail = req.body.ja_detail;
            price.en_detail = req.body.en_detail;

            price.save()
                .then(() => res.json('Price updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;