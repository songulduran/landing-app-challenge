Mini Landing Page & Bileşen KütüphanesiBu proje, semantik HTML, modern CSS (SCSS) ve yeniden kullanılabilir UI bileşenleri geliştirme amacıyla kurgulanmıştır.
Kurulum ve Çalıştırma Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:
Bağımlılıkları yükleyin:Bashnpm install
Geliştirme sunucusunu başlatın:Bashnpm run dev
Üretim (Build) çıktısı alın:Bashnpm run build
Mimari NotlarTeknoloji: Vite + React (JSX).Styling: SCSS kullanılarak BEM (Block Element Modifier) metodolojisi uygulanmıştır.Bileşen Yapısı:
Projede 5 temel bileşen (Button, Input, Card, Modal, Accordion) ayrı klasör yapısında, props ile yapılandırılabilir şekilde geliştirilmiştir.Responsive: Mobil-öncelikli yaklaşım ile 3 farklı breakpoint (≤640px, 641px-1024px, ≥1025px) tanımlanmıştır. Tema DesteğiCSS Variables kullanılarak Light/Dark Mode geçişi sağlanmıştır. Kullanıcı tercihi JS üzerinden yönetilmektedir. Erişilebilirlik (A11y)Semantik HTML etiketleri kullanılmıştır.Klavye ile navigasyon desteği ve temel aria-_ etiketleri (örn: Accordion için aria-expanded) entegre edilmiştir.Performans & LighthouseGörsel optimizasyonu ve lazy-load uygulanmıştır.Hedef: Tüm kategorilerde minimum 90/100 puan. Karar Kayıtları (ADR)Mimari kararlar ve teknik tercihler /docs/adr-_.md dizini altında belgelenmiştir.
