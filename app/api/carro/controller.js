
const _allCarro = async (req, res, next, model) => {
    try {
        const data = await model.mGetCarros();
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _getCarro = async (req, res, next, model) => {
    const id = req.params.id
    try {
        const data = await model.mGetCarro(id);
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _saveCarro = async (req, res, next, model) => {
    const carro = req.body;
    try {
        if (carro.marca && carro.modelo){
            const id = await model.mSaveCarro(carro);
            carro.id = id;
            return res.send(JSON.stringify({success: true, data: carro}));
        }else{
            res.status(400);
            return res.send(JSON.stringify({success: false, error: 'insira marca e modelo'}));
        }
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _updateCarro = async (req, res, next, model) => {
    const id = req.params.id
    const carro = req.body;
    console.log('controlllllllllllller', carro)
    // try {
        if (carro.marca && carro.modelo){
            const data = await model.mUpdateCarro(carro, id);
            return res.send(JSON.stringify({success: true, data: data}));
        }else{
            res.status(400);
            return res.send(JSON.stringify({success: false, error: 'insira marca e modelo'}));
        }
    // } catch (e) {
    //     res.status(400);
    //     return res.send(JSON.stringify({success: false, error: e}));
    // }
};

const _removeCarro = async (req, res, next, model) => {
    const id = req.params.id
    try {
        const data = await model.mDeleteCarro(id);
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};


const getController = (model) => ({
    allCarro: (req, res, next) => _allCarro(req, res, next, model),
    getCarro: (req, res, next) => _getCarro(req, res, next, model),
    saveCarro: (req, res, next) => _saveCarro(req, res, next, model),
    removeCarro: (req, res, next) => _removeCarro(req, res, next, model),
    updateCarro: (req, res, next) => _updateCarro(req, res, next, model),

});

module.exports.getController = getController;
