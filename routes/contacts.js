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


let Contact = require('../models/contact.model');

router.post('/add', upload.single('photo'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const phone_number = req.body.phone_number;
    const line_id = req.body.line_id;
    const facebook = req.body.facebook;
    const instagram = req.body.instagram;
    const contact_info_en = req.body.contact_info_en;
    const contact_info_ja = req.body.contact_info_ja;
    const contact_extra_info_en = req.body.contact_extra_info_en;
    const contact_extra_info_ja = req.body.contact_extra_info_ja;
    const opening_hors_mon = req.body.opening_hors_mon;
    const opening_hors_tue = req.body.opening_hors_tue;
    const opening_hors_wed = req.body.opening_hors_wed;
    const opening_hors_thu = req.body.opening_hors_thu;
    const opening_hors_fri = req.body.opening_hors_fri;
    const opening_hors_sat = req.body.opening_hors_sat;
    const opening_hors_sun = req.body.opening_hors_sun;
    const street = req.body.street;
    const suburb = req.body.suburb;
    const state = req.body.state;
    const google = req.body.google;
    const post_code = req.body.post_code;
    const shop_info_en = req.body.shop_info_en;
    const shop_info_ja = req.body.shop_info_ja;
    const shop_extra_info_en = req.body.shop_extra_info_en;
    const shop_extra_info_ja = req.body.shop_extra_info_ja;
    const shop_photo1 = url + '/public/' + req.file.filename;
    // const shop_photo2 = url + '/public/' + req.file.filename;
    const newContact = new Contact({
        phone_number,
        line_id,
        facebook,
        instagram,
        contact_info_en,
        contact_info_ja,
        contact_extra_info_en,
        contact_extra_info_ja,
        opening_hors_mon,
        opening_hors_tue,
        opening_hors_wed,
        opening_hors_thu,
        opening_hors_fri,
        opening_hors_sat,
        opening_hors_sun,
        street,
        suburb,
        state,
        google,
        post_code,
        shop_photo1,
        // shop_photo2,
        shop_info_en,
        shop_info_ja,
        shop_extra_info_en,
        shop_extra_info_ja,

    });
    newContact.save().then(result => {
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
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .then(() => res.json('Contact deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;