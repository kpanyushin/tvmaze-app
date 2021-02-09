export function normalize(list) {
  return list.reduce(
    (acc, { id, ...rest }) => ({
      ...acc,
      [id]: {
        id,
        ...rest,
      },
    }),
    {}
  );
}

export function denormalize(collection) {
  return Object.keys(collection).map((id) => ({ id, ...collection[id] }));
}
