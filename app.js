const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).send(newTask);
});

app.put('/tasks/:id' , (req,res) => {
    const id = req.params.id;
    tasks[id] = req.body;
    res.send();
});

app.delete('/tasks/:id' , (req, res) => {
    const id =req-params.id;
    tasks.splice(id, 1);
    res.send();
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
