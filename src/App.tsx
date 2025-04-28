import Container from "./children/Container";

function App() {
  return (
    <div>
      <h1>结合Vite和React</h1>
      <Container name="容器" control={() => {
        console.log('控制')
      }}>
        <p>内容</p>
      </Container>
    </div>
  )
}

export default App;