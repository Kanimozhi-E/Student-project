const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB=require("./config/db");
const studentRoutes=require("./routes/studentRoutes");

dotenv.config();
connectDB();

const app=express();
app.use(express.json());

app.use(cors());
app.use("/api/students",studentRoutes);
const PORT=process.env.PORT||5000;
app.listen(PORT,"0.0.0.0",()=>console.log(`server running on port ${PORT}`));
