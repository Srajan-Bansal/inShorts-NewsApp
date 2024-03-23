const NewsSchema = require('./../models/NewsSchema');

exports.getNews = async (req, res, next) => {
    try {
        const data = await NewsSchema.find({});
        res.status(200).json(data);
    } catch (err) {
        console.log('Error in /news route ', err.message);
    }
    next();
}