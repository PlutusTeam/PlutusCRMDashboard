let generatedData: {
    labels: string[];
    datasets: {label: string; backgroundColor: string[]; data: number[]}[];
  }
  
export const getDonutChartData = (themes: ColorThemes) => {
if (generatedData) {
    generatedData.datasets[0].backgroundColor = [themes.danger, themes.info, themes.primary, themes.success, themes.warning]
} else {
    generatedData = {
    labels: ['Latte', 'Mocha', 'Cold Brew', 'Drip Coffee', 'Croissant'],
    datasets: [{
        label: 'Top Items Ordered',
        backgroundColor: [themes.danger, themes.info, themes.primary, themes.success, themes.warning],
        data: [5, 2, 1, 4, 10],
    }],
    }
}

return generatedData
}
  