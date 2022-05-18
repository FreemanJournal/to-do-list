import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GlobalProvider from "./components/context/GlobalContext";
import Routing from "./routing/Routing";
const queryClient = new QueryClient()
function App() {
  return (
    <div className="">

      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <GlobalProvider>
          <Routing />
        </GlobalProvider>
      </QueryClientProvider>


    </div>
  );
}

export default App;
