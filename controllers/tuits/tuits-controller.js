import * as tuitsDao from './tuits-dao.js';
// import posts from './tuits.js';
// let tuits = posts;

const createTuit = async (req,res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0
    newTuit.replies = 0
    newTuit.retuits = 0
    newTuit.liked = false;
    newTuit.username = 'Yay!Me';
    newTuit.handle = '@yayme';
    newTuit.time = 'just now';
    newTuit.image = 'nasa.png';
    // tuits.push(newTuit)
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit)
}

const findTuits = async (req,res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits)
}

const updateTuit = async (req,res) => {
    const tuitId = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((tuit) => tuit._id == tuitId)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates}
    const status = await tuitsDao.updateTuit(tuitId, updates)
    res.json(status)
    // res.json(tuits)
    // res.status(200)
}

const deleteTuit = async (req,res) => {
    const tuitId = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitId)
    // tuits = tuits.filter((tuit) => (tuit._id != tuitId))
    res.json(status)
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}