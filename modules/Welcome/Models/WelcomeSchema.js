import Mongoose from 'mongoose';

let welcomeSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true
    },
});

export default Mongoose.model('Welcome', welcomeSchema);
