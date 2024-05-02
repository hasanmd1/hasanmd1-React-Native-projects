import { Request, Response } from 'express';


const getSignUp = async (req: Request, res: Response) => {
  try {

  }
  catch (e) {
    console.log("Error: ", e);
    return res.status(500).json({message: "Server Error"});
  }
};

const postSignUp = async (req: Request, res: Response) => {
  try {

  }
  catch (e) {
    console.log("Error: ", e);
    return res.status(500).json({message: "Server Error"});
  }
}

export default {
  getSignUp,
  postSignUp,
};
