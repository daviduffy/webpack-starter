// Array building utility
// =================================================================================================
export const createSequencedArray = lim => Array(lim).fill(null).map((e, index) => (index + 1));

// Array building utility
// =================================================================================================
export const randArray = ({ desired, max }) => {
  const donor = createSequencedArray(max);
  const rand = [];
  for (let i = 0; i < desired; i++) {
    const float = donor.splice(~~(Math.random() * donor.length), 1)[0];
    rand.push(float);
  }
  return rand;
};

// Game version creator
// =================================================================================================
export const getGameIndex = ({ limit, diff }) => {
  let desired;
  switch (diff) {
    default:
      desired = limit;
      break;
    case 1:
      desired = 35;
      break;
    case 2:
      desired = 30;
      break;
    case 3:
      desired = 25;
      break;
    case 4:
      desired = 20;
      break;
  }
  return randArray({
    desired,
    max: limit,
  });
};
