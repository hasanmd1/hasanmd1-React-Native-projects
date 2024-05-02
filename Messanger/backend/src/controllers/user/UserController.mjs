import React from 'react';


const getUserProfile = async (req: Request, res: Response) => {
  try {

  }
  catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({message: "Server Error"});
  }
};

const putUserProfile = async (req: Request, res: Response) => {
  try{

  }
  catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({message: "Server Error"});
  }
}

const deleteUserProfile = async (req: Request, res: Response) => {
  try {

  }
  catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({message: "Server Error"});
  }
}

export default {
  getUserProfile,
  putUserProfile,
  deleteUserProfile,
}