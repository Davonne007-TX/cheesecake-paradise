import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const CheesecakeContext = createContext<
  | {
      cheesecakeItem: any[];
      loading: boolean;
      fetchError: string | null;
    }
  | undefined
>(undefined);

export function OurCheeseCakeContext({ children }: { children: ReactNode }) {
  const [cheesecakeItem, setCheesecakeItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCheesecakes = async () => {
      try {
        const res = await fetch("api/cheesecake");

        if (!res.ok) {
          throw new Error("Failed to fetch cheesecake menu");
        }

        const data = await res.json();
        console.log(data);
        setCheesecakeItem(data);
      } catch (error) {
        if (error instanceof Error) {
          setFetchError(error.message);
        } else {
          setFetchError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCheesecakes();
  }, []);

  return (
    <CheesecakeContext.Provider value={{ cheesecakeItem, loading, fetchError }}>
      {children}
    </CheesecakeContext.Provider>
  );
}

export function useCheesecakeItems() {
  const context = useContext(CheesecakeContext);

  if (!context) {
    throw new Error(
      "useCheesecakeItems must be used within OurCheeseCakeContext",
    );
  }

  return context;
}
