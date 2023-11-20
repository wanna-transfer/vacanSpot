import instance from '@/apis/instance';

export interface LocationParam {
  x: string;
  y: string;
}

export const getAddress = async (params: LocationParam) => {
  const response = await instance.get('/api/address', {
    params,
  });

  return response;
};
