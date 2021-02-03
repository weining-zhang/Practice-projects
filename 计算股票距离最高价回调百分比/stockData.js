
// 定义原始股票池数组对象 25 个
export const stockArr = [
  {name: '(持仓)中顺洁柔', highestPrice: 27.15,  countRetracePoint, stockCode: '002511'},
  {name: '(持仓)南极电商', highestPrice: 24.41,  countRetracePoint, stockCode: '002127'},
  {name: '(*)恒瑞医药',    highestPrice: 105.00, countRetracePoint, stockCode: '600276'},
  {name: '绝味食品',       highestPrice: 95.80,  countRetracePoint, stockCode: '603517'},
  {name: '(*)洽洽食品',    highestPrice: 71.17,  countRetracePoint, stockCode: '002557'},
  {name: '盐津铺子',       highestPrice: 161.88, countRetracePoint, stockCode: '002847'},
  {name: '(*)安琪酵母',    highestPrice: 71.95,  countRetracePoint, stockCode: '600298'},
  {name: '煌上煌',         highestPrice: 33.28,  countRetracePoint, stockCode: '002695'},
  {name: '恒顺醋业',       highestPrice: 27.58,  countRetracePoint, stockCode: '600305'},
  {name: '(*)中炬高新',    highestPrice: 83.38,  countRetracePoint, stockCode: '600872'},
  {name: '海天味业',       highestPrice: 203.00, countRetracePoint, stockCode: '603288'},
  {name: '昭衍新药',       highestPrice: 110.98, countRetracePoint, stockCode: '603127'},
  {name: '(*)中国中免',    highestPrice: 249.00, countRetracePoint, stockCode: '601888'},
  {name: '(*)格力电器',    highestPrice: 69.50,  countRetracePoint, stockCode: '000651'},
  {name: '(*)上海机场',    highestPrice: 88.11,  countRetracePoint, stockCode: '600009'},
  {name: '洋河股份',       highestPrice: 189.90, countRetracePoint, stockCode: '002304'},
  {name: '五粮液',         highestPrice: 279.00, countRetracePoint, stockCode: '000858'},
  {name: '通策医疗',       highestPrice: 244.84, countRetracePoint, stockCode: '600763'},
  {name: '凯莱英',         highestPrice: 295.00, countRetracePoint, stockCode: '002821'},
  {name: '晨光文具',       highestPrice: 86.44,  countRetracePoint, stockCode: '603899'},
  {name: '桃李面包',       highestPrice: 67.88,  countRetracePoint, stockCode: '603866'},
  {name: '(*)美的集团',    highestPrice: 95.32,  countRetracePoint, stockCode: '000333'},
  {name: '(*)索菲亚',      highestPrice: 31.33,  countRetracePoint, stockCode: '002572'},
  {name: '欧派家居',       highestPrice: 139.00, countRetracePoint, stockCode: '603833'},
  {name: '顾家家居',       highestPrice: 83.78,  countRetracePoint, stockCode: '603816'},
]

/**
 * function
 * 计算距离最高价回调百分比
 */
function countRetracePoint() {
  let percent = ((this.highestPrice - this.nowPrice) / this.highestPrice * 100).toFixed(2)
  return percent
}