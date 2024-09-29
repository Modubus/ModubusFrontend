import axiosInstance from "@src/api/config/AxiosInstance";
import { createRequestURL } from "@src/api/config/requestConfig";
import {
  postRegisterRequest,
  postRegisterResponse,
} from "@src/types/api/user/user/post.type";
import { AxiosResponse } from "axios";

//회원가입
export async function postRegister(body: postRegisterRequest) {
  const url = createRequestURL(`/user/login`);
  try {
    const data: AxiosResponse<postRegisterResponse> = await axiosInstance.post(
      url,
      body
    );
    const accessToken = data.headers.authorization as string;
    return accessToken;
  } catch (e) {
    console.log(e);
    return false;
  }
}
