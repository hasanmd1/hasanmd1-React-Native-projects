import React from 'react';
import { Request, Response } from 'express';


const getLogoutRequest = async (req: Request, res: Response) => {
  try {

  }
  catch (e) {
    console.log("Error: ", e);
    return res.status(500).json({message: "Server Error"});
  }
};

export default {
  getLogoutRequest,
};
