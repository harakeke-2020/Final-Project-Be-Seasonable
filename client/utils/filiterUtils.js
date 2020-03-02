export function getQuality (food, month) {
  return {
    locallyGrown: food.nzGrown,
    newSeason: food.firstMonth === month,
    endOfSeason: food.lastMonth === month
  }
}
