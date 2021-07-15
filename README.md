# Taro h5 无法获得 View, Text 等组件的自定义的 dataset 值

## BUG 复现代码

```tsx
import {Text, View} from '@tarojs/components'
import {useReady} from '@tarojs/taro';
import {useRef} from 'react';

export default function Index() {

  const viewRef = useRef<HTMLElement>()
  const textRef = useRef<HTMLElement>()
  const divRef = useRef<HTMLDivElement>(null)

  useReady(() => {
    console.log(viewRef.current?.dataset)
    console.log(textRef.current?.dataset)
    console.log(divRef.current?.dataset)
  })

  return (
    <>
      <View ref={viewRef} data-index='view-value'>View dataset</View>
      <Text ref={textRef} data-index='text-value'>Text dataset</Text>
      <div ref={divRef} data-index='div-value'>Div dataset</div>
    </>
  )
}
```

## 在 weapp 执行结果：

![weapp](https://raw.githubusercontent.com/taroify/taro330-dataset/main/images/weapp.png)

## 在 h5 执行结果：

![h5](https://raw.githubusercontent.com/taroify/taro330-dataset/main/images/h5.png)

## 期望结果：

主要问题是 如 View,Text 这种 Taro 内置组件不支持自定的 dataset 属性。
