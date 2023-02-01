import axios from 'axios';

export const getImages = async (search, page) => {
  const { data } = await axios.get('https:pixabay.com/api/', {
    params: {
      q: search,
      page: page,
      key: '32162387-0406b1794dd4cc3a4c661920a',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};
