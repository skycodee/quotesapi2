// startuje serverski program 

import serverInstance from './app';

// __dirname je predefinisana promjenljiva, koja pokazuje na aktivni folder
console.log(__dirname);

serverInstance.listen(3000, (err) => {
    // unutar if-a 
    // false, null, undefined, 0, "", ovo ce sve tretirati kao false 
    // if("Test") - true 
    // if (1) - true
    // if ({"test": 1}) - true

    if (err) {
        console.log('Error while starting server!');
    }
    else {
        // console.log('Starting server...');
        console.log('Server started at port 3000!');
    }
})