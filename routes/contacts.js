const router = require("express").Router();
let Contact = require("../models/contact.model")


router.get("/", (req, res, next) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
    const phone_number = req.body.phone_number;
    const line_id = req.body.line_id;
    const facebook = req.body.facebook;
    const instagram = req.body.instagram;
    const contact_info_1_en = req.body.contact_info_1_en;
    const contact_info_1_ja = req.body.contact_info_1_ja;
    const contact_info_2_en = req.body.contact_info_2_en;
    const contact_info_2_ja = req.body.contact_info_2_ja;
    const contact_extra_info_en = req.body.contact_extra_info_en;
    const contact_extra_info_ja = req.body.contact_extra_info_ja;
    const opening_hors_mon = req.body.opening_hors_mon;
    const opening_hors_tue = req.body.opening_hors_tue;
    const opening_hors_wed = req.body.opening_hors_wed;
    const opening_hors_thu = req.body.opening_hors_thu;
    const opening_hors_fri = req.body.opening_hors_fri;
    const opening_hors_sat = req.body.opening_hors_sat;
    const opening_hors_sun = req.body.opening_hors_sun;

    const newContact = new Contact({
        phone_number,
        line_id,
        facebook,
        instagram,
        contact_info_1_en,
        contact_info_1_ja,
        contact_info_2_en,
        contact_info_2_ja,
        contact_extra_info_en,
        contact_extra_info_ja,
        opening_hors_mon,
        opening_hors_tue,
        opening_hors_wed,
        opening_hors_thu,
        opening_hors_fri,
        opening_hors_sat,
        opening_hors_sun,
    });

    newContact.save()
        .then(() => res.json("contacts added"))
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