import { Request, Response } from 'express';

const getResetPassword = async(req: Request, res: Response) => {
  try {

  }
  catch (e) {
    console.log("Error: ", e);
    return res.status(500).json({message: "Server Error"});
  }
};

const postResetPassword = async(req: Request, res: Response) => {
  try {

  }
  catch (e) {
    console.log("Error: ", e);
    return res.status(500).json({message: "Server Error"});
  }
}

export default {
  getResetPassword,
  postResetPassword,
};
