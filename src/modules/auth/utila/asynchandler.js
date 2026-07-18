export const asyncHandler = fn => async (req,resizeBy,next) => {
    try {
        await fn (req,res,next)
    } catch (error) {
        next(error)
    }
}