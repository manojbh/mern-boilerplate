const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');

// create new data => api/v1/data/new
exports.createData = catchAsyncErrors (async (req, res, next) => {

    // const results = await DataModel.create(req.body);
    // res.status(201).json({
    //     success: true,
    //     results
    // }) 

    res.status(201).json({
        success: true,
        message: 'Created'
    })  
});

exports.getDatas = catchAsyncErrors (async (req, res, next) => {

    // const results = await DataModel.getAll(req.body);
    // res.status(200).json({
    //     success: true,
    //     results
    // }) 
    console.log('datas')
    res.status(200).json({
        success: true,
        message: 'Got all Datas'
    })  
});

exports.getSingleData = catchAsyncErrors (async (req, res, next) => {

    // const result = await DataModel.findById(req.params.id);
    // if (!result) {
    //     return next(new ErrorHandler('Data Not Found', 404));
    // }
    // res.status(200).json({
    //     success: true,
    //     result
    // }) 

    res.status(200).json({
        success: true,
        message: 'Got Single Data'
    })  
});

exports.updateData = catchAsyncErrors (async (req, res, next) => {

    // let result = await DataModel.findById(req.params.id);
    // if (!result) {
    //     return next(new ErrorHandler('Data Not Found', 404));
    // }
    // result = await DataModel.findByIdAndUpdate(req.params.id, req.body, {
    //     new: true,
    //     runValidators: true,
    //     useFindAndModify: false
    // });
    // res.status(200).json({
    //     success: true,
    //     result
    // }) 

    res.status(200).json({
        success: true,
        message: 'Updated'
    })  
});

exports.deleteData = catchAsyncErrors (async (req, res, next) => {

    // const result = await DataModel.findById(req.params.id);
    // if (!result) {
    //     return next(new ErrorHandler('Data Not Found', 404));
    // }
    // await result.remove();
    // res.status(200).json({
    //     success: true,
    //     message: 'Data has been deleted'
    // }) 

    res.status(200).json({
        success: true,
        message: 'Deleted'
    })  
});

