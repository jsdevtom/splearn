export function filterToBeAssessed (qapairs): Array<any> {
  return qapairs.filter((qapair) => new Date(qapair.toBeAssessedNext).getTime() < new Date().getTime())
}
