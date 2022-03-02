# Function utility functions

Box handler.

## boxHandler(value: any): BoxHandler

```js
const getPercentNumber = (value: string) =>
  utils.boxHandler(value)
    .next((value: string) => value.replace(/\%/, ''))
    .next((value: string) => parseFloat(value))
    .done((res: number) => res * 0.01)

getPercentNumber('10%')  // 0.1
getPercentNumber('50%')  // 0.5

const getMoney = (price: string) => Number.parseFloat(price.replace(/\$/, ''));
const getPercent = (percent: string) => Number.parseFloat(percent.replace(/\%/, '')) * 0.01;

const getDiscountPrice = (price: string, discount: string): number => {
  return utils.boxHandler(getMoney(price))
    .done((cents: number) => {
      return utils.boxHandler(getPercent(discount))
        .next((save: number) => cents - cents * save)
    })
    .done((res: number): number => res)

getDiscountPrice('$6.00', '20%')  // 4.8
```

---

## 
