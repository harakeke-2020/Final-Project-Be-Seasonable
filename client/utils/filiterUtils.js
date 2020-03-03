export function getFilteredArray (foodArray, month, filter) {
  switch (filter) {
    case 'all':
      return foodArray
    case 'locallyGrown':
      return foodArray.filter(food => food.nzGrown === 1 || food.nzGrown === true)
    case 'newSeason':
      return foodArray.filter(food => food.firstMonth === month)
    case 'endOfSeason':
      return foodArray.filter(food => food.lastMonth === month)
  }
}
