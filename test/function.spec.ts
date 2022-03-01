import test from 'ava'

import * as utils from './../src'

test('should execute the box handler function', t => {
  const getMoney = (price: string) => Number.parseFloat(price.replace(/\$/, ''));
  const getPercent = (percent: string) => Number.parseFloat(percent.replace(/\%/, '')) * 0.01;

  const getDiscountPrice = (price: string, discount: string) => {
    return utils.boxHandler(getMoney(price))
      .done((cents: number): number => {
        return utils.boxHandler(getPercent(discount))
          .next((save: number) => cents - cents * save)
      })
      .done((res: number): number => res)
  }


  t.is(getDiscountPrice('$6.00', '20%'), 4.8)
})
