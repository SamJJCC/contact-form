
// Import express 
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3002;
const submits=[];

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

// Define a default "route" ('/')
app.get('/', (req, res) => {
  res.render('home');
});


app.post('/submit-form',(req,res)=>{
    // create a json object to store order data
    const submit=req.body;
    submit['timestamp']=new Date();
    console.log(submit);

    // add order object to orders array
    submits.push(submit);
    console.log(submits);
    res.render('confirm',{submit});
});

app.get('/admin', (req, res) => {
    res.render('admin', {submits} );
});

// listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
