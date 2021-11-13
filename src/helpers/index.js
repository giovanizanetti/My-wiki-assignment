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
