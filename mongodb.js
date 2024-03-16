const mongoose =require('mongoose');
let compass_url='mongodb://localhost:27017/sampledb';
let mongodb_url="mongodb+srv://nivedkrishna14:nived@cluster0.tl8t6aw.mongodb.net/firstDb?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongodb_url).then(()=>{console.log("DB detected");})
.catch((err)=>{
    console.log(err);
});
