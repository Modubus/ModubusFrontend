import { useGeoLocation } from "@src/hooks/useGeoLocation";
import { useUserFlow } from "@src/stackflow/userStackFlow";
import { usePlaceKeywordStore } from "@src/store/placeKeyword";
import { useEffect, useRef, useState } from "react";
import { Map } from "react-kakao-maps-sdk";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function KakaoFindPlace({ isStart = true }: { isStart?: boolean }) {
  const { location } = useGeoLocation(geolocationOptions);
  const { push } = useUserFlow();
  const keywordRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const { data, setStartDestination, setEndDestination } =
    usePlaceKeywordStore();
  const keyword = isStart ? data.startKeyword : data.endKeyword;

  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>(
    []
  );
  const [pagination, setPagination] = useState<kakao.maps.Pagination | null>(
    null
  );

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      searchPlaces(keywordRef, mapRef);
    }, 300);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [keyword, setStartDestination]);

  const searchPlaces = (
    keywordRef: React.RefObject<HTMLInputElement>,
    mapRef: React.RefObject<kakao.maps.Map | null>
  ) => {
    const map = mapRef.current;
    if (!map || !keywordRef.current) return;

    const ps = new kakao.maps.services.Places();
    const keyword = keywordRef.current.value.trim();

    if (!keyword) {
      setPlaces([]);
      setPagination(null);
      return;
    }

    ps.keywordSearch(keyword, (result, status, pagination) => {
      placesSearchCB(result, status, pagination, map);
    });
  };

  const placesSearchCB = (
    data: kakao.maps.services.PlacesSearchResult,
    status: kakao.maps.services.Status,
    pagination: kakao.maps.Pagination,
    map: kakao.maps.Map
  ) => {
    if (status === kakao.maps.services.Status.OK) {
      setPlaces(data);
      setPagination(pagination);
      displayPlaces(data, map);
    }
  };

  const displayPlaces = (
    places: kakao.maps.services.PlacesSearchResult,
    map: kakao.maps.Map
  ) => {
    const bounds = new kakao.maps.LatLngBounds();
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // Clear existing markers
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);

    const newMarkers: kakao.maps.Marker[] = places.map((place) => {
      const position = new kakao.maps.LatLng(
        parseInt(place.y),
        parseInt(place.x)
      );
      const marker = new kakao.maps.Marker({ position, map });

      kakao.maps.event.addListener(marker, "mouseover", () => {
        infowindow.setContent(
          `<div style="padding:5px;z-index:1;">${place.place_name}</div>`
        );
        infowindow.open(map, marker);
      });
      kakao.maps.event.addListener(marker, "mouseout", () => {
        infowindow.close();
      });

      bounds.extend(position);
      return marker;
    });

    setMarkers(newMarkers);
    if (map) map.setBounds(bounds);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isStart
      ? setStartDestination(e.target.value)
      : setEndDestination(e.target.value);
  };

  return (
    <>
      <Map
        ref={mapRef}
        center={{ lat: location?.latitude || 0, lng: location?.longitude || 0 }}
        style={{ width: "0px", height: "0px" }}
        level={3}
      />

      <div id="menu_wrap" className="bg-white h-[6rem]">
        <div className="option text-Bold45 border-b-[7px] border-busGreen">
          <input
            placeholder={isStart ? "출발지" : "목적지"}
            ref={keywordRef}
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            id="keyword"
            className="w-full"
          />
        </div>

        <ul className="h-[35rem] mt-[1rem] overflow-auto" id="placesList">
          {places.map((place, index) => (
            <li
              key={index}
              className="item"
              onClick={() => {
                if (keywordRef.current) {
                  keywordRef.current.value = place.place_name;
                  if (isStart) {
                    setStartDestination(
                      place.place_name,
                      place.x,
                      place.y,
                      place.address_name
                    );
                    push("EndDestinationPage", {});
                  } else {
                    setEndDestination(
                      place.place_name,
                      place.x,
                      place.y,
                      place.address_name
                    );
                    push("SelectBusPage", {});
                  }
                }
              }}
            >
              <span
                className={`markerbg marker_${index + 1} text-Bold45`}
              ></span>
              <div className="text-start info text-Regular45 py-[1rem] border-b border-b-darkGray">
                <span>{place.place_name}</span>
              </div>
            </li>
          ))}
        </ul>
        <div id="pagination">
          {pagination &&
            Array.from({ length: pagination.last }, (_, i) => (
              <a
                key={i}
                href="#"
                className={`text-Regular45 text-black px-[1rem] ${
                  i + 1 === pagination.current ? "on text-Bold45" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  pagination.gotoPage(i + 1);
                }}
              >
                {i + 1}
              </a>
            ))}
        </div>
      </div>
    </>
  );
}

export default KakaoFindPlace;
