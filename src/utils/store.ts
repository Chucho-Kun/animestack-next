import { create } from "zustand";
import { LoginTypes } from "../types";

interface Store{
    userLogin: boolean
}

export const useStore = create<Store>(() => ({
    userLogin: true
}))