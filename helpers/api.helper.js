const GLOBAL =  require('../constants/global.constant')
const success = (res,data={}, message ='')=>{
    return res.status(GLOBAL.STATUS_CODE.SUCCESS).json({
        success:true,
        message,
        data
    })
}
const failure = (res,err=[], message ='')=>{
    return res.status(GLOBAL.STATUS_CODE.BAD_REQUEST).json({
        success:false,
        message,
        data
    })
}

module.exports = {
    success,
    failure
}