const express = require ('express');
const router =  express.Router();

const controlvuelo  = require('../controllers/controlvuelo');
const controlPasajeros  = require('../controllers/controlPasajeros');


router.get('/', controlvuelo.list);

    router.post('/add',controlvuelo.save);
    router.post('/update',controlvuelo.update);
    router.post('/delete/:id',controlvuelo.delete);
    router.post('/select2',controlvuelo.select2);
    router.post('/select3',controlvuelo.select3);
    router.post('/select4',controlvuelo.select4);
    

router.get('/', controlPasajeros.list);

    router.post('/addp',controlPasajeros.save);
    router.post('/updatep',controlPasajeros.update);
    router.post('/deletep/:id',controlPasajeros.delete);
    router.post('/select',controlPasajeros.select);


    
    
module.exports= router;