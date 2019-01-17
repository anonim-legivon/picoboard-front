export const secondsToHours = (sec: number | undefined) => {
  const hours = Math.floor(sec! / 3600);
  const minutes = Math.floor((sec! - hours * 3600) / 60);
  const seconds = Math.floor(sec! - hours * 3600 - minutes * 60);

  return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
