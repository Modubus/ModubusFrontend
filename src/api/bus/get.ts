import axiosInstance from "@src/api/config/AxiosInstance";
import { createRequestURL } from "@src/api/config/requestConfig";
import { getBusStationRequest, getBusStationResponse, getStationEndRequest, getStationEndResponse } from "@src/types/api/bus/get.type";

import { AxiosResponse } from "axios";

//출발지-목적지 버스운행정보
export async function getBusStation(body: getBusStationRequest) {
    console.log(body)
    const url = createRequestURL(`/bus/station`);
    const data: AxiosResponse<getBusStationResponse> =
        await axiosInstance.get(url, { params: body });
    return data.data
}

//출발지-목적지 버스운행정보
export async function getStationEnd(body: getStationEndRequest) {
    console.log(body)
    const url = createRequestURL(`/bus/station/des-route`);
    const data: AxiosResponse<getStationEndResponse> =
        await axiosInstance.get(url, { params: body });
    return data.data
}