export interface Coffe {
  id: number;
  img: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  amount: number | undefined;
}

export interface CartState {
  cart: Coffe[];
  setCart: React.Dispatch<React.SetStateAction<Coffe[]>>;
  amountCoffe: { [key: number]: number };
  setAmountCoffe: React.Dispatch<
    React.SetStateAction<{ [key: number]: number }>
  >;
  valueAmount: number;
  totalAmount: number;
  delivery: number;
}

export interface ChildrenProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export interface Address {
  methodPayment: string;
  data?: {
    cep?: string;
    city?: string;
    complement?: string;
    district?: string;
    number?: string;
    state?: string;
    street?: string;
  };
  payment?: string;
}

export interface AddressState {
  address: Address;
  setAddress: (newAddress: Address) => void;
}

export interface CartData {
  address: Address;
}
