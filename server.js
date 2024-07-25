const express = require('express');
const app = express();
const PORT = 8000


const rapper = {
  '21 savage': {  'age': 29,
    'birthName': 'London Bloke',
    'birthLocation': 'Da UK'
  },
  'chance the rapper': {  'age': 29,
    'birthName': 'chiraq nucca',
    'birthLocation': 'the Chi'
  }
}

app.get('/',(req,res) => {
    res.sendFile(__dirname +'/index.html')
})


app.get('/api',(req,res) => {
    res.json(rapper)
})

app.get('/api/:rapperName',(req,res) => {
    const rapperName = req.params.rapperName.toLowerCase()
    if(rapper[rapperName]) {
        res.json(rapper[rapperName])
    } else{
        res.json('noooooo')
    }
})


app.listen(PORT,() => {
    console.log('here i am')
})