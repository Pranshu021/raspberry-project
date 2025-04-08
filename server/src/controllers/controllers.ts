import { Request, Response, NextFunction } from 'express';

const getHome = async(req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({"message": "Backend API is working"})
    } catch(error) {
        console.error(error);
        next(error);
    }
}

export default {
    getHome
}