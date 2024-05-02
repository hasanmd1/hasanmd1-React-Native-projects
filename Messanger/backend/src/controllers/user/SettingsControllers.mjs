import React from 'react';
import { Request, Response } from 'express';

const getSettings = async (req: Request, res: Response) => {
  try {

  }
  catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({message: "Server Error"});
  }
};

const putSettings = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
  }
  catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({message: "Server Error"});
  }
}

const postSettings = async (req: Request, res: Response) => {
  try {

  }
  catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({message: "Server Error"});
  }
}

export default {
  getSettings,
  putSettings,
  postSettings,
};
