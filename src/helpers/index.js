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
 * @returns array of articles objects
 */
export const transformAndSort = (data) => {
  return (
    (data?.query &&
      Object.keys(data.query.pages)
        .sort((articleA, articleB) => articleA - articleB)
        .map((key) => {
          return !data.query.pages[key].pageprops.disambiguation && data.query.pages[key]
        })) ||
    []
  )
}
