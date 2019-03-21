export const getDogImages = () => {
  return fetch('https://dog.ceo/api/breeds/image/random', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json());
};
