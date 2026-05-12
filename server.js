require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

const Memo = mongoose.model('memo', new mongoose.Schema({
  name: String,
  type: String,
  level: Number,
  nature: String
}));

app.get('/api/memo', async (req, res) => {
  const memo = await Memo.find();
  res.send(memo);console.log("GOT THE MEMORY");
});

app.post('/api/memo', async (req, res) => {
  const memo = new Memo(req.body);
  await memo.save();
  res.send(memo);console.log("ADDED A NEW MEMORY:", memo);
});
//Delete request for the data
app.delete('/api/memo/:id', async(req, res) => {
  await Memo.findByIdAndDelete(req.params.id);
  res.status(204).send; // 205 means that we have successful deletion
})
//Update request for the data
app.put('/api/memo/:id', async(req, res) => {
  const updateMemo = await Memo.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.send(updateMemo);
})