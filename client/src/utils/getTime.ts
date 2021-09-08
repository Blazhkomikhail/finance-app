const getTime = (time: string): string => {
  return time.split('T')[1].split('.')[0];
};

export default getTime;
