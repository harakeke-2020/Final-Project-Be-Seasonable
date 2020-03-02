export const FILTER_CHANGE = 'FILTER_CHANGE'

export function filterChange (value) {
  return {
    type: FILTER_CHANGE,
    filter: value
  }
}
