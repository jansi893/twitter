const multer = require('multer');
const path = require('path');
const crypot = require('crypto');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/uploads');
    },
    filename: function (req, file, cb) {
     crypot.randomBytes(16, (err, buf)=>{
    if(err)return cb(err);
    const filename = buf.toString('hex') + path.extname(file.originalname);
    cb(null, filename);
     })
    }
});
const upload = multer({ storage: storage });
module.exports = upload;



// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images/uploads'); // Ensure this folder exists
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });
// module.exports = upload;