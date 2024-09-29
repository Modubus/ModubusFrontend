// 버스회사 코드 입력하기
export type postBusCodeRequest = {
  code: string;
};

export type postBusCodeResponse = {
  name: string;
  id: number;
  cityCode: number;
};

// 버스번호 입력하기
export type postBusNumRequest = {
  busCompanyId: number;
  vehicleno: string;
};

export type postBusNumResponse = Array<{
  vehicleno: string;
  routnm: string;
  cityCode: string;
  startnodenm: string;
  endnodenm: string;
}>;

// 버스 정보를 보내주면 아이디 반환하기
export type postBusInfoRequest = {
  busCompanyId: number;
  vehicleno: string;
};

export type postBusInfoResponse = {
  busId: number;
};
