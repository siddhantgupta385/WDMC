const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ClubSchema = new Schema({
  ClubName: { type: String, required: true },
  ClubWebsite: { type: String, required: false },
  ClubImg:  [{type: String, required: true}],
  ClubDesc :{type:String,required:true},
  ClubExtraContent :{type:String,required:false},
  ClubMemberNames :[{type:String,required:true}],
  ClubMemberDesign :[{type:String,required:true}],
  date: { type: Date, required: false  , default: Date.now},
}, {
  timestamps: true,
});

const Club = mongoose.model('Club', ClubSchema);

module.exports = Club;