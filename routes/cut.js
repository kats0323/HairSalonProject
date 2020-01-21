const router = require("express").Router();
let Cut = require("../models/cut.model")

router.route("/").get((req, res) => {
    Cut.find()
        .then(cuts => res.json(cuts))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
    const ja_course = req.body.ja_course;
    const en_course = req.body.en_course;
    const ja_price = req.body.ja_price;
    const en_price = req.body.en_price;
    const ja_detail = req.body.ja_detail;
    const en_detail = req.body.en_detail;

    const newCut = new Cut({
        ja_course,
        en_course,
        ja_price,
        en_price,
        ja_detail,
        en_detail
    })

    newCut.save()
        .then(() => res.json("Prices added"))
        .catch(err => res.status(400).json("Error: " + err));

});
router.route('/:id').get((req, res) => {
    Cut.findById(req.params.id)
        .then(cut => res.json(cut))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Cut.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cut deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Cut.findById(req.params.id)
        .then(cut => {
            cut.ja_course = req.body.ja_course;
            cut.en_course = req.body.en_course;
            cut.ja_price = req.body.ja_price;
            cut.en_price = req.body.en_price;
            cut.ja_detail = req.body.ja_detail;
            cut.en_detail = req.body.en_detail;

            cut.save()
                .then(() => res.json('Cut updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;