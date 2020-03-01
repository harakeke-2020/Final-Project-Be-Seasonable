export const NEXT_MONTH = 'NEXT_MONTH'
export const LAST_MONTH = 'LAST_MONTH'
export const CURRENT_MONTH = 'CURRENT_MONTH'

const date = new Date()
const month = date.getMonth() + 1

export function getNextMonth (month) {
  if (month === 12) {
    return {
      type: NEXT_MONTH,
      month: 1
    }
  } else {
    return {
      type: NEXT_MONTH,
      month: month + 1
    }
  }
}

export function getLastMonth (month) {
  if (month === 1) {
    return {
      type: LAST_MONTH,
      month: 12
    }
  } else {
    return {
      type: LAST_MONTH,
      month: month - 1
    }
  }
}

export function getCurrentMonth () {
  return {
    type: CURRENT_MONTH,
    month: month
  }
}
