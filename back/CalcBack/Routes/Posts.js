const express = require('express')

const router = express.Router();
 
const Post =require('../models/Post');

//this one gets back all the posts

router.get('/', async(req, res) =>{
try{


const posts = await Post.find();
res.json(posts);

}

catch(err){

res.json({message:err});

}
    // res.send('We are on Posts still');
})
//submits a post
router.post('/', async (req, res)=>{
    const post = new Post({
        title: "CREATED BY VUE",
        description: "DESCRIBED BY VUE"
    });

try{
    const savedPost = await post.save()
    res.json(savedPost)
} catch(err){
res.json({message: err});

}

});


//SPECIFIC POST
router.get('/:postId', async (req, res) =>
{
try{
    const post = await Post.findById(req.params.postId);
res.json(post);
}
catch(err){res.json({message: err})}
}
)

//Delete Post
router.delete('/:postId', async (req,res) =>{
try{
const removedPost = await Post.findByIdAndRemove({_id: req.params.postId})
res.json(removedPost);
}
catch(err){
    res.json({message: err})
}

});



//update a post
router.patch('/:postId', async (req, res) =>
{
    try{
const updatedPost = await Post.updateOne({_id: req.params.postId},
    {$set: {title:"UPDATE TEST"}}
    
    );
    res.json(updatedPost);
    
}
catch(err){

    res.json({message: err})

}

}
)


module.exports = router;