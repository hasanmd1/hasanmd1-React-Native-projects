import { Request, Response } from 'express';

const getLoginRequest = async (req: Request, res: Response) => {
  try{

  }
  catch (e) {
    console.log("Error: ", e);
    return res.status(500).json({message: "Server Error"});
  }
};

const postLoginRequest = async (req: Request, res: Response) => {
  try{

  }
  catch (e) {
    console.log("Error: ", e);
    return res.status(500).json({message: "Server Error"});
  }
}

export default {
  getLoginRequest,
  postLoginRequest,
};
