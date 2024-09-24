import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface placeKeywordStoreType {
    data: {
        startKeyword: string;
        startX: string;
        startY: string;
        startDes: string;
        endKeyword: string;
        endX: string;
        endY: string;
        endDes: string;
    }
    setStartDestination: {
        (startName: string, x?: string, y?: string, startDes?: string): void
    }
    setEndDestination: {
        (endName: string, x?: string, y?: string, enedDes?: string): void
    }
}

export const usePlaceKeywordStore = create<placeKeywordStoreType>()(immer((set) => ({
    data: {
        startKeyword: "",
        startX: "",
        startY: "",
        startDes: "",
        endKeyword: "",
        endX: "",
        endY: "",
        endDes: ""
    },
    setStartDestination: (startName, x, y, startDes) => set((state) => {
        state.data.startKeyword = startName;
        if (x) state.data.startX = x;
        if (y) state.data.startY = y;
        if (startDes) state.data.startDes = startDes;
    }),
    setEndDestination: (endName, x, y, endDes) => set((state) => {
        state.data.endKeyword = endName;
        if (x) state.data.endX = x;
        if (y) state.data.endY = y;
        if (endDes) state.data.endDes = endDes;
    })
})));

