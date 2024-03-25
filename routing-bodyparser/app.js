const express = require('express');
const server = express();
const bodyParser = require('body-parser');

// Middleware olarak body-parser kullanarak form verilerini işleyelim. Middleware dediğimiz kavram budur işte
// use ile kullanılır ve post veya get işlemi olduğu farketmez ger halükarda çalışır.içerisine farklı parametreler 
// de alabilir tabi
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/', (req, res, next) => { // Ansayfayı cekmek istedigimizden burada get kullandik. response verdigimizden 
    // burada next bir seye yaramaz.
    res.send(`
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <form action="/Urunler" method="POST">
                        <input type="text" name = "isim">
                        <button type="submit">Ekle</button>
                    </form>
                </body>
            </html>`);
            res.end();
})


server.post('/Urunler',(req,res,next)=>{ // /Urunlere veri gonderme istegi attigimizdan burada post kullandik.
    icerik = req.body; // Bunu yukarıda ekledigimiz modul olmadan kullanırsak undefined hatası alırız. Parse edilmeli.
    console.log(icerik)
    res.send('<h1>'+icerik.isim+'<h1>');
    
})


server.listen(5000,()=>{
    console.log('server calisiyor.')
});