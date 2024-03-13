import './index.css';
import { Layout } from '../Layout';
import { Routes, Route} from "react-router-dom"
import { ContactForm } from '../ContactForm';
import { ProductsList } from '../Products';
import { Search } from '../SearchBar';
import { CartDetail } from '../CartDetail';
import CheckoutSuccess from '../CheckoutMessage';
import SingleProduct from '../Products/Product';

function HomePage() {
  return <div>
    <Search />
    <ProductsList  />
  </div>
}
function ContactPage() {
  return <ContactForm />
}
function CheckoutPage() {
  return <CartDetail />
}
function CheckoutSuccessPage() {
  return <CheckoutSuccess />
}
function ProductPage() {
  return <SingleProduct />
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="checkoutSuccess" element={<CheckoutSuccessPage />} />
          <Route path=":id" element={<ProductPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
