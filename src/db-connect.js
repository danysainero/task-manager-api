const mongoose = require('mongoose');
const _URL= 'mongodb+srv://danydaniel:jZ2q6_84kCE.Fpq@taskmanager.mntpl.mongodb.net/taskmanager'

const connectToDb = async () => {
        await mongoose.connect(_URL,
            {
                useCreateIndex: true,
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
            });
          console.log(`db connect`);
}

module.exports = connectToDb;