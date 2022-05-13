const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = () => {
    return (
      <div>
        {course}
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <p> Part 1: {part1} has {exercises1} exercises </p>
        <p> Part 2: {part2} has {exercises2} exercises </p>
        <p> Part 3: {part3} has {exercises3} exercises </p>
      </div>
    )
  }

  const Total = () => {
    return (
      <div>
        <p>total number of exercises is {exercises1 + exercises2 + exercises3 }</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App
