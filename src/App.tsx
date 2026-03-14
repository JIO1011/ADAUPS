import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Benefits from './pages/Benefits';
import BenefitDetail from './pages/BenefitDetail';
import Transparency from './pages/Transparency';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-adaups" element={<About />} />
          
          <Route path="servicios">
            <Route index element={<Services />} />
            <Route path=":serviceId" element={<ServiceDetail />} />
          </Route>
          
          <Route path="beneficios">
            <Route index element={<Benefits />} />
            <Route path=":benefitId" element={<BenefitDetail />} />
          </Route>
          
          <Route path="transparencia" element={<Transparency />} />
          <Route path="noticias">
            <Route index element={<News />} />
            <Route path=":newsId" element={<NewsDetail />} />
          </Route>
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
