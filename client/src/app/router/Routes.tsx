import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {path: '', element: <HomePage />},
    {path: 'catalog', element: <Catalog />},
    {path: 'catalog/:id', element: <ProductDetails />},
    {path: 'about', element: <AboutPage />},
    {path: 'contact', element: <ContactPage />},
  ]
}
// 7:15 / 9:25 40. Setting up React Router
// https://www.udemy.com/course/learn-to-build-an-e-commerce-store-with-dotnet-react-redux/learn/lecture/28964942#overview
]);
