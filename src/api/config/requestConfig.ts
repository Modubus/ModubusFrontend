"use server";
import QueryString from "qs";

type queryValue =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | File
  | undefined
  | null;

export interface RequestQuery {
  [x: string]: queryValue;
}

export const createRequestURL = (
  dest: string,
  params?: RequestQuery
) => {

  if (params === undefined) {
    return `${dest}`;
  }

  return `${dest}?${QueryString.stringify(params, {
    arrayFormat: "repeat",
    encode: false,
  })}`;
};
