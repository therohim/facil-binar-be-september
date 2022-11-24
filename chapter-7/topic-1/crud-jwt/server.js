const express = require('express')
const session = require('express-session')
const passport = require('./lib/passport')

const router = require('./router')
const port = process.env.PORT || 7200

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(session({
  secret:'rahasia',
  resave:false,
  saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(router)

app.listen(port, ()=>{
  console.log(`server at running in port ${port}`)
})