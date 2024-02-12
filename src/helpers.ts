export const hobbiesChecker = (array: string[]) => {
  if (array instanceof Array) {
    for (let elem of array) {
      if (typeof elem !== 'string') return false;
    }
    return true;
  }
  return false;
};
