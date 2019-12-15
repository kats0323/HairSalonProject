const router = require("express").Router();
let About = require("../models/about.model")

router.route("/").get((req, res) => {
    About.find()
        .then(about => res.json(about))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
    const introduction = req.body.introduction;
    const image = req.body.image;



    const newAbout = new About({
        introduction,
        image
    })

    newAbout.save()
        .then(() => res.json("About added"))
        .catch(err => res.status(400).json("Error: " + err));

});
router.route('/:id').get((req, res) => {
    About.findById(req.params.id)
        .then(about => res.json(about))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    About.findByIdAndDelete(req.params.id)
        .then(() => res.json('About deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    About.findById(req.params.id)
        .then(about => {
            about.introduction = req.body.introduction;
            about.image = req.body.image;


            about.save()
                .then(() => res.json('About updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;