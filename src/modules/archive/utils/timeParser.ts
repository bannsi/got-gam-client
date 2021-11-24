export const timeParser = (url: string, time: string) => {
  const list = time.split(':');
  const isWWW = url.includes('www') ? '#' : '?';
  if (list.length === 1) {
    return `${url}${isWWW}t=${list[0]}s`;
  } else if (list.length === 2) {
    return `${url}${isWWW}t=${list[0]}m${list[1]}s`;
  } else if (list.length === 3) {
    return `${url}${isWWW}t=${list[0]}h${list[1]}m${list[2]}s`;
  }
};
