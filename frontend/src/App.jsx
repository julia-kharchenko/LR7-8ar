import CreateUserForm from "./components/forms/CreateUserForm";
import { Separator } from "./components/ui/separator";
import UsersList from "./components/users/UsersList";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-[1440px] mx-auto p-5">
        <CreateUserForm />
        <h1 className="text-3xl my-4">Users</h1>
        <Separator />
        <UsersList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
