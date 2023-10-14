import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
import producRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from './middleware/errorHandler.js';
// const express=require('express'); we can use this when we will not use es module
const port = process.env.PORT || 5000;

connectDB(); //Connect to MongoDB
const app = express();

app.get('/', (req, res) => {
    res.send('API is running ... ');
});

app.use('/api/products', producRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));