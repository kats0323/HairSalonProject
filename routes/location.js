let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


let Location = require('../models/location.model');

router.post('/add', upload.single('photo'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const street = req.body.street;
    const suburb = req.body.suburb;
    const state = req.body.state;
    const google = req.body.google;
    const post_code = req.body.post_code;
    const shop_info_1_en = req.body.shop_info_1_en;
    const shop_info_1_ja = req.body.shop_info_1_ja;
    const shop_info_2_en = req.body.shop_info_2_en;
    const shop_info_2_ja = req.body.shop_info_2_ja;
    const shop_extra_info_en = req.body.shop_extra_info_en;
    const shop_extra_info_ja = req.body.shop_extra_info_ja;
    const shop_photo1 = url + '/public/' + req.file.filename;
    const newLocation = new Location({
        street,
        suburb,
        state,
        google,
        post_code,
        shop_photo1,
        shop_info_1_en,
        shop_info_1_ja,
        shop_info_2_en,
        shop_info_2_ja,
        shop_extra_info_en,
        shop_extra_info_ja,

    });
    newLocation.save().then(result => {
        res.status(201).json({
            shop_photo1: result.shop_photo1
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})
router.get("/", (req, res, next) => {
    console.log("REQUEST TO SERVER")
    Location.find()
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
    Location.findById(req.params.id)
        .then(location => res.json(location))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Location.findByIdAndDelete(req.params.id)
        .then(() => res.json('Location deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;