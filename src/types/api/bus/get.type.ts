export type getStationEndRequest = {
    startStation: string,
    endStation: string
}
export type getStationEndResponse = {
    busNumber: string,
    busType: number,
}[]