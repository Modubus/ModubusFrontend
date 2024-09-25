import axiosInstance from "@src/api/config/AxiosInstance";
import { createRequestURL } from "@src/api/config/requestConfig";
import {
  postBusCodeRequest,
  postBusCodeResponse,
  postBusInfoRequest,
  postBusInfoResponse,
  postBusNumRequest,
  postBusNumResponse,
} from "@src/types/api/driver/post.type";
import { AxiosResponse } from "axios";

// 버스 회사 코드 입력하기
export async function postBusCode(body: postBusCodeRequest) {
  const url = createRequestURL(`/driver/code`);
  try {
    const data: AxiosResponse<postBusCodeResponse> = await axiosInstance.post(
      url,
      body
    );
    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
}

// 버스 번호 입력하기

export async function postBusNum(body: postBusNumRequest) {
  const url = createRequestURL(`/driver/code`);
  try {
    const data: AxiosResponse<postBusNumResponse> = await axiosInstance.post(
      url,
      body
    );
    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
}

// 버스 번호 입력하기

export async function postBusInfo(body: postBusInfoRequest) {
  const url = createRequestURL(`/driver/code`);
  try {
    const data: AxiosResponse<postBusInfoResponse> = await axiosInstance.post(
      url,
      body
    );
    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
}
