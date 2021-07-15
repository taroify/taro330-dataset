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
