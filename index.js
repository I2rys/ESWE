//Dependencies
const Express = require("express")
const Path = require("path")

//Variables
const Port = process.env.PORT || 8080
const Web = Express()

//Main
Web.use(Express.static(Path.resolve(__dirname, "public")))

Web.listen(Port, ()=>{
    console.log(`Server is running in ${Port}`)
})
