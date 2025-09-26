import express from "express"
import cors from "cors"
import productRouter from "../src/routes/product.route.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}))


// app.get("/",(req,res)=>{
//   res.send("API is running....")
// })

//route initialize
app.use("/", productRouter)

export default app