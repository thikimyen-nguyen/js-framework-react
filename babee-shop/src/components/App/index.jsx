import './index.css';
import { Layout } from '../Layout';
import { Routes, Route} from "react-router-dom"
import { ContactForm } from '../ContactForm';
import { ProductsList, products } from '../Products';
import { Search } from '../SearchBar';
import { CartDetail } from '../CheckoutPage';

function HomePage() {
  return <div>
    <Search />
    <ProductsList products={products}  />
  </div>
}
function ContactPage() {
  return <ContactForm />
}
function CheckoutPage() {
  return <CartDetail />
}
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="checkout" element={<CheckoutPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
