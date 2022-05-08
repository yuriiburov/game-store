const checkTwo = (date: number) => (date.toString().length < 2 ? `0${date}` : date);

export const timeGenerate = (release: number) => {
  const date = new Date(release);
  const hours = checkTwo(date.getHours());
  const minutes = checkTwo(date.getMinutes());

  return `${hours}:${minutes}`;
};

const dateGenerate = (release: number) => {
  const date = new Date(release);
  const day = checkTwo(date.getDate());
  const month = checkTwo(date.getMonth());

  return `${day}/${month}/${date.getFullYear()}`;
};

export default dateGenerate;
