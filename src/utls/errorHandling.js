export const asyncHandler=(fn)=>{
    return (req,res,next) => {
        fn(req,res).catch(erro=>{
            return res.next({message:"catch error",error:erro.stack});
        })
    }
}