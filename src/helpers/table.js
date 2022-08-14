import formatDate from '@/helpers/formatDate'

export function generateDatesRange({ startDate, endDate }, firstHeaderCol) {
  const currentDate = new Date(startDate.getTime())
  const generatedFullDates = []
  const generatedHeaderDates = []

  currentDate.setDate(currentDate.getDate())

  while (currentDate <= endDate) {
    generatedFullDates.push(new Date(currentDate))

    generatedHeaderDates.push(
      `${new Date(currentDate).getDate()} ${currentDate.toLocaleString('default', {
        month: 'short',
      })}`
    )
    currentDate.setDate(currentDate.getDate() + 1)
  }

  if (firstHeaderCol) {
    generatedHeaderDates.unshift(firstHeaderCol)
  }

  return {
    generatedFullDates,
    generatedHeaderDates,
  }
}

export function generateTableData(rows, dates, data) {
  const generatedTableData = []

  rows.value.forEach((row) => {
    const newRows = []
    const filteredData = data.value.filter((item) => item.categoryId === row.id)

    newRows.push(row.name)

    dates.value.forEach((date) => {
      const newItem = filteredData.find((item) => formatDate(item.date) === formatDate(date))

      newRows.push(newItem ? newItem.amount : 0)
    })

    generatedTableData.push(newRows)
  })

  return generatedTableData
}
