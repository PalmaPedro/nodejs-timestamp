const express = require("express");
const app = express();


app.get("/api/timestamp", (req, res) =>{
    const date = new Date();
    res.json({
        unix: date.getTime(),
        utc : date.toUTCString()
    });
});


app.get("/api/timestamp/:date_string", function(req, res){
    const {date_string} = req.params;
    let date = new Date(date_string);

    if(date.toString() === 'Invalid Date'){
        date = new Date(parseInt(date_string));
    }if(date.toString() === 'Invalid Date'){
        res.json({
            error: 'Invalid Date'
        });
    }else{
        res.json({
       unix: date.getTime(),
       utc: date.toUTCString()
    });
    }
});



const port = 3000;
app.listen(port, () => console.log(`server started on port ${port}`));