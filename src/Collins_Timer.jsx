export const CountDown = (props: CountDownProps) => {
  const { timing, start, handleCounterEnd } = props

  const [counter, setCounter] = useState(timing || 5)

  useEffect(() => {
    const timer = counter && start ? setInterval(() => setCounter(counter - 1), 1000): undefined

    if (counter === 0) {
      handleCounterEnd()
    }
    return () => clearInterval(timer);
  }, [counter, start])


  return (
    <CountDownContainer>
      {counter}
    </CountDownContainer>
  )
}
