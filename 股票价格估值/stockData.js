// 股票数据
export const stockArr = [
  {
    name: '南极电商',
    totalStock: 24.55,
    profit2020: 15.1,
    profit2021: 18.8,
    lowestPE: 16.03,
    averagePE: 31.27
  },
  {
    name: '中顺洁柔',
    totalStock: 13.12,
    profit2020: 9.2,
    profit2021: 11.2,
    lowestPE: 21.94,
    averagePE: 34.9
  }
]

// 创建一个数据结构处理原始股票数据
export class StockInfo {
  constructor(i) {
    this.name = stockArr[i].name
    this.totalStock = stockArr[i].totalStock + '亿股'
    this.profit2020 = stockArr[i].profit2020 + '亿'
    this.profit2021 = stockArr[i].profit2021 + '亿'
    this.lowestPE = stockArr[i].lowestPE
    this.averagePE = stockArr[i].averagePE
    this.NormalPrice2020 = stockArr[i].NormalPrice2020 + '元'
    this.LowestPrice2020 = stockArr[i].LowestPrice2020 + '元'
    this.LowestPrice2021 = stockArr[i].LowestPrice2021 + '元'
    this.NormalPrice2021 = stockArr[i].NormalPrice2021 + '元'
  }
}