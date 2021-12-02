'use strict'

function dateToTimeStamp(date) {
  const dateInstance = new Date(date)
  return dateInstance.getTime()
}

module.exports = {
  meilisearch: {
    transformEntry(entry) {
      const transformedEntry = {
        ...entry,
        created_by: dateToTimeStamp(entry.created_by),
        updated_by: dateToTimeStamp(entry.updated_by),
      }
      return transformedEntry
    },
  },
}