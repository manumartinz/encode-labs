const { connect } = require('mongoose');


async function connectDB() {
    try {
        await connect('mongodb://localhost/encodelabs');
        console.log('MongoDB is Connected');
    } catch (err) {
        console.error(err);
    }
}

export default connectDB;