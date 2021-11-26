import { resolve } from 'dns';
import kakaoApiRequest from '../../../../app/kakaoApiRequest';
import { LocationResponse } from './LocationResponse';

export const getPlaceListAPI = async (lat: number, lng: number, code: string) => {
  const data = await kakaoApiRequest<Response>({
    method: 'get',
    url: '/v2/local/search/category',
    query: {
      category_group_code: code,
      x: lng.toString(),
      y: lat.toString(),
      radius: 500,
      size: 3
    }
  }).then((data) => {
    const { documents } = data;
    console.log(documents);
    return documents;
  });

  return await data;
};
// return Promise.all(promises).then((value) => );

interface Response {
  documents: LocationResponse[];
  meta: { total_count: number; pageable_count: number; is_end: boolean; same_name: any };
}
