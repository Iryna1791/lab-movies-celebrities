const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();


/* GET home page */
router.get("/celebrities/create", (req, res,) => {
  res.render("new-celebrity");
});

router.post('/celebrities/create', (req, res) => {
    console.log('req body', req.body)
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({name, occupation, catchPhrase})
    .then(() => res.redirect('/celebrities'))
    .catch(error => console.log(error))
    res.render('new-celebrity')
});

router.get('/celebrities/find', (req, res) => {
    Celebrity.find()
    .then((allCelebs) =>{
        console.log(allCelebs)
        res.render('celebrities/celebrities')
        .catch(error => console.log(error))
    })
})

module.exports = router;