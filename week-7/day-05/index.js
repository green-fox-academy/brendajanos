const express = require('express')
const mysql = require('mysql')

const app = express()
app.use(express.json())
const conn = mysql.createConnection({
    user: 'root',
    password: 'password',
    port: 3307,
    host: 'localhost',
    database: 'reddit',
})

conn.connect()

app.get('/hello', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.put('/posts/:id/upvote', (req, res) => {
    const id = req.params.id
  updatescore(1,id,res)
})

app.put('/posts/:id/downvote', (req, res) => {
  const id = req.params.id
updatescore(-1,id,res)
})

function updatescore (change,id,res){

  conn.query(
    'UPDATE `reddit`.`posts` SET `score` = score +? WHERE `id` = ?;',
    [change,id],
    () => {
        conn.query('SELECT * FROM reddit.posts WHERE `id` = ?;', [id], (err, result, fields) => {
            res.send(result[0])
        })
    }
)
}

app.post('/posts', (req, res) => {
    const title = req.body.title
    const url = req.body.url

    conn.query(
        'INSERT INTO `reddit`.`posts` (`title`,`url`) VALUES(?,?);',
        [title, url],
        (err, result, fields) => {
            console.log(err)
            console.log(result)

            res.send('OK')
        }
    )
})

app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM reddit.posts;', (err, result, fields) => {
        res.json(result)
    })
})

app.listen(8080, () => {
    console.log('server started')
})
