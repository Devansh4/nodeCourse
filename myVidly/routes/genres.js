const express = require('express');
const router = express.Router();

let genres = [  { id: 1, name: "Action"},
            { id: 2, name: "Comedy"},
            { id: 3, name: "Horror"}];

router.get('/',(req,res)=>{
    res.send(genres);
});

router.get(':id',(req,res)=>{
    const genre = genres.find(g=> g.id===parseInt(req.params.id));
    if(!genre) return res.sendStatus(404).send("Genre ID is not available");
    res.send(genre);
});

router.post('/',(req,res)=>{
    const result = validateGenre(req.body);
    if(result.error) return res.status(400).send("The name entered is not valid");
    const genre = {
        id: genres.length+1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

router.put('/:id',(req,res) => {
    let genre = genres.find(g=> g.id===parseInt(req.params.id));
    if(!genre) return res.status(404).send("The ID is not available and so cannot be updated");
    const result = validateGenre(genre.body);
    if(result.error) return res.status(400).send("The name to be updated is not valid");
    genre.name = req.body.name;
    res.send(genre);
});

router.delete('/:id',(req,res)=>{
    const genre = genres.find(g=> g.id===parseInt(req.params.id));
    if(!genre) return res.send(404).send("The given ID is not available");
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
});

function validateGenre(genre){
    const schema = {
        name : Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
}

module.exports = router;