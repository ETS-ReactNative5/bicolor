export const parseGoogleSheet = sheet => {
  const key = sheet.range.split('!')[0];
  const array = sheet.values.reduce((acc, el, index) => {
    if (index === 0) return acc;
    const item = el.reduce(
      (accum, elem, ind) => ({
        ...accum,
        [sheet.values[0][ind]]: elem,
      }),
      {},
    );
    return [...acc, item];
  }, []);
  return {
    [key]: {
      elements: array,
    },
  };
};
