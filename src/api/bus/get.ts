import axiosInstance from "@src/api/config/AxiosInstance";
import { createRequestURL } from "@src/api/config/requestConfig";
import { getStationEndRequest, getStationEndResponse } from "@src/types/api/bus/get.type";

import { AxiosResponse } from "axios";

//출발지-목적지 버스운행정보
export async function getStationEnd(body: getStationEndRequest) {
    const url = createRequestURL(`/bus/station/des-route`);
    console.log(body)
    const data: AxiosResponse<getStationEndResponse> =
        await axiosInstance.get(url, { params: body });
    return data.data

}