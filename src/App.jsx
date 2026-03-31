import { useState } from 'react';
import Accordion from "./components/Accordion/Accordion";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import './App.scss';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('E-posta alanı boş bırakılamaz!');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Geçerli bir e-posta adresi giriniz!');
    } else {
      setError('');
      alert('Form başarıyla gönderildi (Yalancı Submit)!');
      setEmail('');
    }
  };

  return (
    <div className="app-container">
      {/* 1. Üst Menü */}
      <nav style={{ padding: '1rem', textAlign: 'right' }}>
        <Button onClick={toggleTheme} variant="secondary">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
      </nav>

      {/* 2. Hero Bölümü */}
      <section className="hero">
        <h1>Geleceğin Teknolojisi Burada</h1>
        <p>Harika ürünümüzü keşfedin. Modern ve hızlı çözümlerle tanışın.</p>
      </section>

      {/* 3. Fiyatlandırma Bölümü (Hata Buradaydı, Düzelttik) */}
      <section className="pricing-section">
        <h2 style={{ textAlign: 'center', margin: '2rem 0' }}>Planlarımız</h2>
        <div className="pricing-grid">
          {/* Başlangıç Planı */}
          <div className="c-card">
            <h3>Başlangıç</h3>
            <p className="price">Ücretsiz</p>
            <ul>
              <li>Temel Özellikler</li>
              <li>Topluluk Desteği</li>
            </ul>
            <Button variant="primary">Hemen Başla</Button>
          </div>

          {/* Pro Planı (Eksik kalmasın diye ekledim) */}
          <div className="c-card">
            <h3>Pro</h3>
            <p className="price">₺99/ay</p>
            <ul>
              <li>Tüm Özellikler</li>
              <li>7/24 Destek</li>
            </ul>
            <Button variant="primary">Satın Al</Button>
          </div>
        </div> {/* pricing-grid kapandı */}
      </section> {/* pricing-section kapandı */}

      {/* 4. SSS Bölümü */}
      <section className="faq-section">
        <h2>Sıkça Sorulan Sorular</h2>
        <Accordion 
          title="Ödeme yöntemleri nelerdir?" 
          content="Kredi kartı ve havale ile ödeme yapabilirsiniz." 
          id="faq-1"
        />
      </section>

      {/* 5. İletişim Formu */}
      <section className="contact-section">
        <h2>İletişim</h2>
        <form onSubmit={handleFormSubmit} noValidate>
          <Input 
            type="email" 
            label="E-posta Adresiniz"
            value={email} 
            error={error}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="örnek@mail.com"
            aria-required="true"
          />
          <Button type="submit" variant="primary">Gönder</Button>
        </form>
      </section>
      
    </div> // app-container kapandı
  );
}

export default App;