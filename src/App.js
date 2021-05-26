import React from "react"
import Layout from './pages/layout/layout'
import Main from './pages/main/main'

function App() {
  return (
    <React.Fragment>
      <Layout>
      <Main title={"Welcome hunters!"}></Main>
      </Layout>
    </React.Fragment>
  );
}

export default App;
