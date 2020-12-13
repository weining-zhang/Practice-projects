
export function request(code) {
  var xhr = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhr.open('get', `https://api.doctorxiong.club/v1/stock?code=${code}&token=9xblIjLBut`, true)
    // 接收返回值
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.responseText)
          resolve(data.data[0])
        } else {
          console.log('request failed');
          reject(xhr.responseText)
        }
      }
    }
    xhr.send()
  })
}

export class StockInfo {
  constructor(res, stockArr, i) {
    this.name = stockArr[i].name
    this.totalWorth = Number(res.totalWorth).toFixed(1) + '亿'
    this.nowPrice = res.price
    this.highestPrice = stockArr[i].highestPrice
    this.changePercent = res.changePercent + '%'
    this.priceChange = res.priceChange
    this.countRetracePoint = stockArr[i].countRetracePoint
    this.stockCode = stockArr[i].stockCode
    this.date = res.date
  }
}
