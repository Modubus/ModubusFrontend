import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface placeKeywordStoreType {
    data: {
        startKeyword: string;
        startX: string;
        startY: string;
        endKeyword: string;
        endX: string;
        endY: string;
    }
    setStartDestination: {
        (startName: string, x?: string, y?: string): void
    }
    setEndDestination: {
        (endName: string, x?: string, y?: string): void
    }
}

export const usePlaceKeywordStore = create<placeKeywordStoreType>()(immer((set) => ({
    data: {
        startKeyword: "",
        startX: "",
        startY: "",
        endKeyword: "",
        endX: "",
        endY: ""
    },
    setStartDestination: (startName, x, y) => set((state) => {
        state.data.startKeyword = startName;
        if (x) state.data.startX = x;
        if (y) state.data.startY = y;
    }),
    setEndDestination: (endName, x, y) => set((state) => {
        state.data.endKeyword = endName;
        if (x) state.data.endX = x;
        if (y) state.data.endY = y;
    })
})));

