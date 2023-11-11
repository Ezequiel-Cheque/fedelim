import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';
import { Navbar } from "./ui/components/Navbar";

function App() {

  return (
    // <>
    //   <Navbar />
    // </>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
