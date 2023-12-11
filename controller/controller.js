const db = require('../db.js')
const path = require('path')
const fs = require('fs')
class Controller {

    async insertValue(req, res) {
        const {d1} = req.body
        let dat = new Date
        const newTime = await db.query('Insert INTO sensor1 (data, d1) values ($1,$2) RETURNING *', [dat, d1])  
        res.json(newTime.rows[0])
    }
    async getValues(req, res) {
        var data = {
            labels: ['12'],
            datasets: [{
                    label: "temp",
                    backgroundColor: ['red', 'yellow', 'green'],
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0]
            }],
        }
        const d = await db.query('SELECT * FROM sensor1 ORDER BY id DESC LIMIT 6')
        console.log(d.rows[0].data)
        
        d.rows.reverse().forEach(function (element, key) {
            
            let f = (data.datasets[0].data[key]) = (d.rows[key].d1)
            var h, m, s, dd;
            dd = (d.rows[key].data)
            h = dd.getHours();
            m = dd.getMinutes();

            var correct_date = h + ':' + m
            console.log(correct_date)
            console.log(key)
            let g = (data.labels[key]) = (correct_date)
            
        });
        
   
        
        //res.sendFile(path.join(__dirname, '../main.html'))
        res.render('main', {data:data})
      

}
}
    
module.exports = new Controller()