interface DaWall {
  [key: string]: number;
}

const rate: DaWall = {
  people: 4,
  walls: 9,
  minutes: 63,
};
const rate2: DaWall = {
  people: 10,
  walls: 10,
  minutes: 22,
};

function time(obj: DaWall, people: number, walls: number) {
  console.log(obj.people);
  console.log(obj.walls);
  console.log(people);
  console.log(walls);
  console.log(obj.minutes);

  return;
}

// -------------------------

export const result = time(rate, 7, 4);
export const result1 = time(rate2, 10, 10);
export const result2 = time(rate, 7, 4);
