import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Routing from "./routing/Routing";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()
function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Routing />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>

    </div>
  );
}

export default App;
