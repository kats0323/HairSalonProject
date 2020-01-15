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

let About = require("../models/about.model")

router.route("/").get((req, res) => {
    About.find()
        .then(about => res.json(about))
        .catch(err => res.status(400).json("Error: " + err));
})

router.post('/add', upload.single('photo'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const en_introduction = req.body.en_introduction;
    const ja_introduction = req.body.ja_introduction;
    const photo = url + '/public/' + req.file.filename;
    const newAbout = new About({
        en_introduction,
        ja_introduction,
        photo
    });
    newAbout.save().then(result => {
        res.status(201).json({
            photo: result.photo
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})


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

// router.route('/update/:id').post((req, res) => {
//     About.findById(req.params.id)
//         .then(about => {
//             about.introduction = req.body.introduction;
//             about. = req.body.image;


//             about.save()
//                 .then(() => res.json('About updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });


router.put('/update/:id', upload.single('photo'), (req, res, next) => {
    console.log("PHOTO=====", req.file)
    const url = req.protocol + '://' + req.get('host')
    const en_introduction = req.body.en_introduction;
    const ja_introduction = req.body.ja_introduction;
    const photo = url + '/public/' + req.file.filename;
    let { id } = req.params

    About.findById(id)
        .then(about => {
            about.en_introduction = en_introduction
            about.ja_introduction = ja_introduction
            about.photo = photo
            about.save()
                .then(about => res.send(about))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})


// router.put('/update/:id', upload.single('photo'), async (req, res) => {
//     console.log("------PUT REQUEST-------", req.body)
//     console.log("photo------", req.file)
//     let { id } = req.params
//     let { en_introduction, ja_introduction } = req.body
//     let { photo } = req.file.filename

//     // await About.findByIdAndUpdate(id, { en_introduction, ja_introduction, photo })
//     //     .catch(err => res.status(500).send(err))
//     // res.json("About updated")

//     About.findById(id)
//         .then(about => {
//             console.log("ABOUT before", about)
//             about.en_introduction = en_introduction;
//             about.ja_introduction = ja_introduction;
//             console.log("-----")
//             about.photo = photo;
//             console.log("ABOUT after", about)
//             // about.save()
//             //     .then((about) => res.json(about))
//             //     .catch(err => res.status(400).json('Error: ' + err));
//             about.save().then(result => {
//                 res.status(201).json({
//                     result
//                 })
//             }).catch(err => {
//                 console.log(err),
//                     res.status(500).json({
//                         error: err
//                     });
//             })
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// })




module.exports = router;