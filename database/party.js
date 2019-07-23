import mongoose from 'mongoose'

var Schema = mongoose.Schema;

  var partySchema = new Schema({
    name : {type : String , required : true}
  });

  export default mongoose.model('Location' , partySchema);
