import kakaoApiRequest from '../../../app/kakaoApiRequest';
import { LocationResponse } from './LocationResponse';

const codeList = ['AT4', 'AD5', 'FD6', 'CE7', 'CT1'];

export const getPlaceListAPI = (
  lat: number,
  lng: number,
  placeList: LocationResponse[],
  setPlaceList: (list: LocationResponse[]) => void
) => {
  // const promises = codeList.map(async (code) => {
  //   console.log(lng.toString(), lat.toString());
  kakaoApiRequest<Response>({
    method: 'get',
    url: '/v2/local/search/category',
    query: {
      category_group_code: 'AT4',
      x: lng.toString(),
      y: lat.toString(),
      radius: 500,
      size: 3
    }
  }).then((data) => {
    const { documents } = data;
    setPlaceList([...documents]);
    console.log(documents);
    return data;
  });

  // });
  // return Promise.all(promises).then((value) => {
  //   console.log(value);
  //   return value;
  // });
};

interface Response {
  documents: LocationResponse[];
  meta: { total_count: number; pageable_count: number; is_end: boolean; same_name: any };
}
