import axios from 'axios';

const instance = axios.create({
  baseURL: 'https:pixabay.com/api',
});

export const getImages = async (search, page) => {
  const { data } = await instance.get('/', {
    params: {
      q: search,
      page: page,
      key: '32162387-0406b1794dd4cc3a4c661920a',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 3,
    },
  });

  return data;
};
