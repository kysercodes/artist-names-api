const express = require('express');
const app = express();
const PORT = 8000
const cors = require('cors');


app.use(cors())


const rapper = {
  '21 savage': {  'age': 31,
    'birthName': 'London Bloke',
    'birthLocation': 'Da UK'
  },
  'chance the rapper': {  'age': 31,
    'birthName': 'Chancelor Johnathan Bennett',
    'birthLocation': 'the Chi'
  },
  'unknown': {  'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
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
        res.json(rapper['unknown'])
    }
})


app.listen(PORT,() => {
    console.log('here i am')
})