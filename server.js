const express = require('express')
const cors = require('cors')
const app = express()
var mysql = require('mysql2');
require('dotenv').config()
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions))
app.use(express.json())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Orchha@1234",
  database: "scholarship"
});


con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

});
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * from jee", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
// con.connect(function (err) {
//   if (err) throw err;
//   con.query("SELECT distinct  name_of_scholarship from main, jee, category where Region='Madhya Pradesh' and Annual_Family_Income<=600000 and jee_rank<=1050000 and jee.slno = main.slno", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

app.post('/api/check', (req, res) => {
  const data = req.body;
  console.log(data);
  con.connect(function (err) {
    if (err) throw err;
    if (data.examGiven === 'JEE') {
      con.query(`SELECT distinct name_of_scholarship from main, jee, category where (Region='${data.state}'  or Region='National') and Annual_Family_Income>=${data.income} and jee_rank>=${data.rank} and jee.slno = main.slno and category.slno = main.slno and category='${data.category}' and nationality='${data.nationality}' and (domicile='${data.state}' or domicile='NA')  `, function (err, result, fields) {
        console.log(result);
        if (err) res.status(500).json({ message: 'DB error' })
        else res.status(200).json(result)
      });
    }
    else{
      con.query(`SELECT distinct name_of_scholarship from main, neet, category where Region='${data.state}' and Annual_Family_Income>=${data.income} and neet_rank>=${data.rank} and jee.slno = main.slno and category.slno = main.slno and category='${data.category}' and nationality='${data.nationality}'`, function (err, result, fields) {
        console.log(result);
        if (err) res.status(500).json({ message: 'DB error' })
        else res.status(200).json(result)
      });
    }
  });
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`server stared at port ${PORT}`))