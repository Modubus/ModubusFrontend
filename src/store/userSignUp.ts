import { create } from "zustand";
interface userSignUpStoreType {
    data: {
        username: string;
        password: string;
        email: string;
        disableType: string;
    }
    updateData: {
        (value: { username?: string; password?: string; email?: string; disableType?: string }): void
    }
}

export const useUserSignUpStore = create<userSignUpStoreType>()((set) => ({
    data: {
        username: "",
        password: "",
        email: "",
        disableType: ""
    },
    updateData: (value) => set((state) => {
        return {
            data: {
                ...state.data,
                ...value
            }
        }
    })
}));

