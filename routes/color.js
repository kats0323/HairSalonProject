const router = require("express").Router();
let Color = require("../models/color.model")

router.route("/").get((req, res) => {
    Color.find()
        .then(colors => res.json(colors))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
    const ja_course = req.body.ja_course;
    const en_course = req.body.en_course;
    const ja_price = req.body.ja_price;
    const en_price = req.body.en_price;
    const ja_detail = req.body.ja_detail;
    const en_detail = req.body.en_detail;

    const newColor = new Color({
        ja_course,
        en_course,
        ja_price,
        en_price,
        ja_detail,
        en_detail
    })

    newColor.save()
        .then(() => res.json("Colors added"))
        .catch(err => res.status(400).json("Error: " + err));

});
router.route('/:id').get((req, res) => {
    Color.findById(req.params.id)
        .then(color => res.json(color))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Color.findByIdAndDelete(req.params.id)
        .then(() => res.json('Color deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Color.findById(req.params.id)
        .then(color => {
            color.ja_course = req.body.ja_course;
            color.en_course = req.body.en_course;
            color.ja_price = req.body.ja_price;
            color.en_price = req.body.en_price;
            color.ja_detail = req.body.ja_detail;
            color.en_detail = req.body.en_detail;

            color.save()
                .then(() => res.json('color updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;