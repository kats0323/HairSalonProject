const router = require("express").Router();
let Perm = require("../models/perm.model")

router.route("/").get((req, res) => {
    Perm.find()
        .then(perms => res.json(perms))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
    const ja_course = req.body.ja_course;
    const en_course = req.body.en_course;
    const ja_price = req.body.ja_price;
    const en_price = req.body.en_price;
    const ja_detail = req.body.ja_detail;
    const en_detail = req.body.en_detail;

    const newPerm = new Perm({
        ja_course,
        en_course,
        ja_price,
        en_price,
        ja_detail,
        en_detail
    })

    newPerm.save()
        .then(() => res.json("Perm added"))
        .catch(err => res.status(400).json("Error: " + err));

});
router.route('/:id').get((req, res) => {
    Perm.findById(req.params.id)
        .then(perm => res.json(perm))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Perm.findByIdAndDelete(req.params.id)
        .then(() => res.json('Perm deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Perm.findById(req.params.id)
        .then(perm => {
            perm.ja_course = req.body.ja_course;
            perm.en_course = req.body.en_course;
            perm.ja_price = req.body.ja_price;
            perm.en_price = req.body.en_price;
            perm.ja_detail = req.body.ja_detail;
            perm.en_detail = req.body.en_detail;

            perm.save()
                .then(() => res.json('Perm updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;