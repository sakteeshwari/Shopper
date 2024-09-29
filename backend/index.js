const express = require('express');
const cors = require('cors');
const port=4000;

// create mongoose
const mongoose=require("mongoose")

const jwt=require("jsonwebtoken")
const multer=require("multer")
const path=require("path");
const { type } = require('os');

// Initialize an Express application
const app = express();

// Enable CORS for all routes
app.use(cors());



// Middleware to parse JSON requests
app.use(express.json());



// db connect with mongo db
mongoose.connect("mongodb+srv://sakthijessy26:123@cluster0.xe8oo.mongodb.net/E-com_Shopper")

// API Creation
app.post("/",(req,res)=>{
      res.json("Express App is Running")
})

//Image Storage Engine
const storage=multer.diskStorage({
  destination:"./upload/images",
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload=multer({storage:storage})

// creating upload end-point for images
app.use("/images",express.static("upload/images"))

app.post("/upload",upload.single("product"),(req,res)=>{
      res.json({
        success:1,
          image_url:`http://localhost:${port}/images/${req.file.filename}`
      })
})

// schema for creating products
const Product=mongoose.model("Product",{
  id:{
    type:Number,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  category:{
    type:Number,
    required:true,
  },
  new_price:{
    type:Number,
    required:true,
  },
  old_price:{
    type:Number,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now,
  },
  available:{
    type:Boolean,
    default:true,
  },
  
})

app.post("./addproduct",async (req,res)=>{
  const product=new Product({
    id:req.body.id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    new_price:req.body.new_price,
    old_price:req.body.old_price,
  })
  console.log(product);
  await product.save();
  console.log("Saved")
  res.json({
    success:true,
    name:req.body.name,
  })
})

app.listen(port, (error) => {
    
    if(!error){
      console.log(`Server is running on port ${port}`);
    }
    else
    {
      console.log("Error:"+error)
    }
  });