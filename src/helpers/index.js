/**
 * Format description
 * @param item
 *
 * Check if there is a short description
 * @returns short description
 * If no  short description
 * @returns long dexcrition
 * if no description
 * @returns string INVALID
 *
 */
export const getDescription = (item) => {
  if (!item) return ''
  const invalidDescription = 'INVALID'
  let description

  if (item?.pageprops['wikibase-shortdesc']) {
    description = item?.pageprops['wikibase-shortdesc']
  } else if (item?.pageprops['wikibase-shortdesc']) {
    description = item?.pageprops['wikibase-shortdesc']
  } else {
    description = invalidDescription
  }
  return description
}

/**
 * Sort data ascendantly
 *
 * Convert response object to an Array
 *
 * @param data
 *
 * @returns array of articles objects containing only needed properties
 */
export const transformAndSort = (data) => {
  return (
    (data?.query &&
      Object.keys(data.query.pages)
        .sort((articleA, articleB) => articleA - articleB)
        .map((key) => {
          const { title, extract, pageid, pageprops, fullurl } =
            !data.query.pages[key].pageprops.disambiguation && data.query.pages[key]
          const filteredResponse = { title, extract, pageid, pageprops, fullurl }
          return filteredResponse
        })) ||
    []
  )
}
