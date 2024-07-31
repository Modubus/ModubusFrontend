import { ContentType } from "@src/types/user/setRequest/contentType.type";

export const REQUEST_CONTENTS: ContentType[] = [
    {
        title: "휠체어 사용자예요.",
        content: "휠체어의 안전한 승하차를 위해 미리 경사판(슬로프) 및 좌석을 준비해주세요. ",
        warning: "*본 요청 사항은 저상 버스 탑승 시에만 적용됩니다. ",
        iconUrl: "/icons/user/setRequest/wheelchair.svg"
    },
    {
        title: "버스 정보를 알려주세요.",
        content: "현재 몇 정거장 전인지, 언제 승하차를 준비해야 하는지 미리 알려주세요. ",
        iconUrl: "/icons/user/setRequest/bus.svg"
    }
]