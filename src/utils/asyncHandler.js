const asyncHandleer= (requestHandler) => {
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}



export {asyncHandler}

// const asyncHandler = ()=> {}
// const asyncHandler = (func)=> {}
// const asyncHandler = (func)=>()=> {} // if you want to pass the function in another function higher order function

// const asyncHandler = (func)=> async(req,res,nexxt)=> {

//     try{
// await func(req,res,next);
//     }
//     catch(error){
//         res.status(error.code|| 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }

