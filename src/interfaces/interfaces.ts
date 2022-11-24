import { Dispatch, SetStateAction } from "react";

export interface LoginArgument {
  email: string;
  password: string;
}

export type userData = {
  data?: {
    avatar: string;
    name: string;
  };
  error?: string;
};

export interface LoginProps {
  setUser: Dispatch<SetStateAction<Object>>;
  user: userData;
}