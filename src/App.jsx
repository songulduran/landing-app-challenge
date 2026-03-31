import { useState } from 'react';
import Accordion from "./components/Accordion/Accordion";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import './App.scss';

function App() {
  const [theme, setTheme] = useState('light');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.body.style.backgroundColor = nextTheme === 'dark' ? '#111827' : '#ffffff';
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('E-posta alanı boş bırakılamaz!');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Geçerli bir e-posta adresi giriniz!');
    } else {
      setError('');
      alert('Form başarıyla gönderildi!');
      setEmail('');
    }
  };

  return (
    <div className="app-container">
      <nav className="header-nav">
        <div className="logo">LandingApp</div>
        <Button onClick={toggleTheme} variant="secondary">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
      </nav>
alert(butona basınca model açılacak)
      <section className="hero">
        <h1>Geleceğin Teknolojisi Burada</h1>
        <p>Harika ürünümüzü keşfedin. Modern ve hızlı çözümlerle tanışın.</p>
        <Button onClick={() => setIsModalOpen(true)} variant="primary">
          Kampanyayı Gör
        </Button>
      </section>

      <section className="pricing-section">
        <h2 className="section-title">Planlarımız</h2>
        <div className="pricing-grid">
          <Card title="Başlangıç" price="Ücretsiz">
            <ul>
              <li>Temel Özellikler</li>
              <li>Topluluk Desteği</li>
              <li>Sınırlı Erişim</li>
            </ul>
            <Button variant="outline">Hemen Başla</Button>
          </Card>

          <Card title="Pro" price="₺99/ay" variant="featured">
            <ul>
              <li>Tüm Özellikler</li>
              <li>7/24 Destek</li>
              <li>Özel Danışmanlık</li>
            </ul>
            <Button variant="primary">Satın Al</Button>
          </Card>
        </div>
      </section>

      <section className="faq-section">
        <h2>Sıkça Sorulan Sorular</h2>
        <Accordion 
          title="Ödeme yöntemleri nelerdir?" 
          content="Kredi kartı ve havale ile ödeme yapabilirsiniz." 
          id="faq-1"
        />
        <Accordion 
          title="İptal politikası nasıldır?" 
          content="İstediğiniz zaman üyeliğinizi iptal edebilirsiniz." 
          id="faq-2"
        />
      </section>

      <section className="contact-section">
        <h2>İletişim</h2>
        <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
          <Input 
            type="email" 
            label="E-posta Adresiniz"
            value={email} 
            error={error}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="örnek@mail.com"
          />
          <Button type="submit" variant="primary">Abone Ol</Button>
        </form>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Özel Teklif!"
      >
        <p>Bugüne özel tüm Pro planlarda %20 indirim fırsatını kaçırmayın!</p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>Fırsatı Yakala</Button>
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>Kapat</Button>
        </div>
      </Modal>

      <footer className="footer">
        <p>© 2026 LandingApp. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;