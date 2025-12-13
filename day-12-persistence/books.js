require('dotenv').config();
const express=require('express');
const mongoose =require('mongoose')


const app=express();
const PORT=3000;
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ Connection Error:', err));

const movieSchema=new mongoose.Schema({
    /*title: String, Required.

    director: String.

    rating: Number (e.g., 8.5).

    hasWatched: Boolean. (New Skill: Set a default value of false)

    Hint: { type: Boolean, default: false }




    */

    title:{type:String,required:true},
    director:{type:String},
    rating:{type:Number},
    hasWatched:{type:Boolean,default:false}


    });
    const movie=mongoose.model('movie',movieSchema);

    /*
    POST /movies → Add a new movie (e.g., "Inception").

    GET /movies → See all movies.

    PUT /movies/:id → Update the rating OR mark it as watched (true).

    DELETE /movies/:id → Delete a movie.
    */


    app.post('/movies',async(req,res)=>{
        try{
        const nm=await movie.create(req.body);
        res.status(201).json(nm);
    }catch(e){
        res.status(500).json({error:e.message});

    }

    });
    app.get("/movies",async(req,res)=>{
        const movies=await movie.find();
        res.json(movies);

    })
;
    app.put('/movies/:id',async(req,res)=>{
        const updated=await movie.findByIdAndUpdate(
            req.params.id,req.body,{new:true}
        );
        if (updated){
            res.json(updated)
        }else{
            res.status(404).json({error:"Movie not found"});
        }
    });
    app.delete('/movies/:id',async (req,res)=>{
        const deleted=await movie.findByIdAndDelete(req.params.id);
        if (deleted){
            res.json({message:"Book deleted successfully"});
        }else{
            res.status(404).json({error:"Movie not found"});
        }
    });
    app.listen(PORT,()=>
    {
        console.log(`🚀 Server running on port ${PORT}`);
    })
