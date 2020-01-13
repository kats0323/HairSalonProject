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

// Photo model
let Blog = require('../models/blog.model');

router.post('/add', upload.single('photo'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const title = req.body.title;
    const content = req.body.content;
    console.log("in post route", req.body)
    const photo = url + '/public/' + req.file.filename;
    const newBlog = new Blog({
        title,
        content,
        photo
    });
    console.log("blog, newBlog")
    newBlog.save().then(result => {
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
router.get("/", (req, res, next) => {
    Blog.find()
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json('Blog deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;