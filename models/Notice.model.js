const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
  noticeTitle: { type: String, required: true },
  noticeText :{type:String,required:true},
  noticeCategory :{type:String,required:true},
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Notice = mongoose.model('Notice', NoticeSchema);

module.exports = Notice;