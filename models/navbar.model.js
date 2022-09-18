const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DetailSchema = new Schema({ name: String , link:String});

const navbarSchema = new Schema({
    Administration:{
        AboutUs:[DetailSchema],
        Leadership:[DetailSchema],
        GoverningBodies:[DetailSchema],
        Committees:[DetailSchema],
        Cells:[DetailSchema],
    }
    // Academics:{},
    // LifeAtNITJ:{},
    // Research:{},
    // Alumni:{},
    // Admissions:{},
}, {
  timestamps: true,
});

const Navbar = mongoose.model('Navbar', navbarSchema);

module.exports = Navbar;