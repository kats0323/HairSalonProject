const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require('express-validator/check');


const User = require("../models/user.model")

router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({
        min: 6
    })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { email, password } = req.body

        try {

            // see if user exists
            let user = await User.findOne({ email })
            if (user) {
                res.status(400).json({ errors: [{ msg: "User Already exsit" }] })
            }

            // Encrypt Password
            user = new User({
                email,
                password
            })

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();


            // Return jsonwebtoken

            const payload = {
                user: {
                    id: user.id
                }
            }
            // expiresIn should be 36000
            jwt.sign(
                payload,
                config.get("jwtSecret"),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send("Server error")
        }




    });

module.exports = router
