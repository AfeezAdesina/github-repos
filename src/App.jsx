
import './App.css'
import './navBar'
import Repos from './Repos'
import RepoDetails from './RepoDetails'
import { Route, Routes } from 'react-router-dom'
import Fallback from './errorPage'
import { ErrorBoundary } from 'react-error-boundary'
import Header from './header'
import CreateRepo from './CreateRepo'
import Page404 from './404page'

function App() {

  return (
    <>
      <Header />
      <ErrorBoundary
          FallbackComponent={Fallback}
          onReset={(details) => {
            // Reset the state of your app so the error doesn't happen again
          }}
      >
        <Routes>
          <Route path="/" element={< Repos />} />
          <Route path="/repo/:repoName" element={<RepoDetails />} />
          <Route path="*" element={<Fallback />} />
          <Route path="/CreateRepo" element={<CreateRepo />} />
          <Route path="/Page404" element={<Page404 />} />
        </Routes>
      </ErrorBoundary>
    </>
  )
}

export default App
