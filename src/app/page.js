import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[var(--burgundy)] text-white py-32 px-6 text-center overflow-hidden">

      {/* Background Logo */}
      <img
        src="/logo-full.png"
        alt="Background Logo"
        className="absolute inset-0 m-auto w-[1000px] opacity-10 pointer-events-none select-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* PROFIL ADVOKAT */}
      <section id="profil" className="bg-[var(--ivory)] py-20 px-6">
        <div data-aos="fade-right" className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* FOTO (nanti bisa diganti foto asli) */}
          <img
            src="/profile.jpg"
            alt="Ahmad Kawakiby, S.H., M.H."
            data-aos="fade-left"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />

          {/* TEKS PROFIL */}
          <div>
            <h2 className="heading-font text-3xl md:text-4xl text-[var(--burgundy)] mb-4">
              Ahmad Kawakiby, S.H., M.H.
            </h2>
            <p className="text-[var(--gold)] font-medium mb-4">
              Advokat & Konsultan Hukum  
              <br />Founder Ahmad Kawakiby, S.H., M.H. & Partners
            </p>

            <p className="mb-4">
              Ahmad Kawakiby, S.H., M.H. adalah advokat dan konsultan hukum
              yang berpengalaman dalam menangani berbagai perkara litigasi
              maupun non-litigasi. Dengan latar belakang pendidikan hukum yang
              kuat serta pengalaman praktik langsung di lapangan, beliau dikenal
              sebagai kuasa hukum yang tegas, strategis, dan berorientasi pada
              hasil terbaik bagi klien.
            </p>

            <p>
              Dalam menjalankan profesinya, Ahmad Kawakiby mengedepankan
              integritas, profesionalisme, serta komitmen penuh dalam setiap
              penanganan perkara. Selain aktif dalam praktik hukum, beliau juga
              berperan dalam memberikan edukasi hukum kepada masyarakat melalui
              berbagai media dan forum publik.
            </p>
          </div>
        </div>
      </section>

      {/* BIDANG PRAKTIK HUKUM */}
      <section id="praktik" className="bg-[var(--charcoal)] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-font text-3xl md:text-4xl text-[var(--gold)] text-center mb-12">
            Bidang Praktik Hukum
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div data-aos="fade-up" data-aos-delay="100" className="border border-[var(--gold)]/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Hukum Keluarga
              </h3>
              <p className="text-gray-300">
                Perceraian, hak asuh anak, serta penyelesaian harta bersama (gono-gini).
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="border border-[var(--gold)]/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Hukum Pidana
              </h3>
              <p className="text-gray-300">
                Pendampingan hukum bagi tersangka, terdakwa, maupun korban tindak pidana.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="border border-[var(--gold)]/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Hukum Perdata
              </h3>
              <p className="text-gray-300">
                Penanganan perkara wanprestasi dan perbuatan melawan hukum.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="border border-[var(--gold)]/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Hukum Bisnis & Perusahaan
              </h3>
              <p className="text-gray-300">
                Konsultasi serta pendampingan hukum untuk pelaku usaha dan korporasi.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="border border-[var(--gold)]/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Pertanahan & Properti
              </h3>
              <p className="text-gray-300">
                Penyelesaian sengketa tanah, sertifikat, dan permasalahan properti lainnya.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="border border-[var(--gold)]/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Kontrak & Perjanjian
              </h3>
              <p className="text-gray-300">
                Penyusunan, peninjauan, dan penyelesaian sengketa kontrak secara hukum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REPUTASI & PENGALAMAN */}
      <section id="pengalaman" className="bg-[var(--ivory)] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-font text-3xl md:text-4xl text-[var(--burgundy)] text-center mb-12">
            Reputasi & Pengalaman
          </h2>

          <div data-aos="fade-up" className="space-y-6 text-lg text-[var(--charcoal)]">
            <div className="flex items-start gap-4">
              <span className="text-[var(--gold)] text-2xl leading-none">✔</span>
              <p>
                Menangani berbagai perkara hukum di tingkat Pengadilan Negeri
                maupun Pengadilan Agama dengan pendekatan yang strategis dan terukur.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--gold)] text-2xl leading-none">✔</span>
              <p>
                Berpengalaman dalam penanganan perkara perceraian kompleks,
                hak asuh anak, serta sengketa harta bersama (gono-gini).
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--gold)] text-2xl leading-none">✔</span>
              <p>
                Dipercaya sebagai kuasa hukum dalam perkara pidana serius
                serta kasus yang mendapat perhatian publik.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--gold)] text-2xl leading-none">✔</span>
              <p>
                Klien berasal dari berbagai latar belakang, mulai dari
                individu, pelaku usaha, hingga perusahaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NILAI & PRINSIP ADVOKAT */}
      <section id="nilai" className="bg-[var(--burgundy)] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-font text-3xl md:text-4xl text-[var(--gold)] text-center mb-12">
            Nilai & Prinsip Kami
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div data-aos="zoom-in" className="bg-white/5 p-6 rounded-lg border border-[var(--gold)]/20">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Integritas
              </h3>
              <p className="text-gray-200">
                Menjunjung tinggi kejujuran, etika profesi, dan kode etik advokat
                dalam setiap penanganan perkara.
              </p>
            </div>

            <div data-aos="zoom-in" className="bg-white/5 p-6 rounded-lg border border-[var(--gold)]/20">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Profesionalisme
              </h3>
              <p className="text-gray-200">
                Bekerja berdasarkan hukum yang berlaku dengan strategi yang terukur
                dan pendekatan yang sistematis.
              </p>
            </div>

            <div data-aos="zoom-in" className="bg-white/5 p-6 rounded-lg border border-[var(--gold)]/20">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Keterlibatan Aktif
              </h3>
              <p className="text-gray-200">
                Setiap perkara ditangani secara langsung, serius, dan penuh tanggung jawab.
              </p>
            </div>

            <div data-aos="zoom-in" className="bg-white/5 p-6 rounded-lg border border-[var(--gold)]/20">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Kerahasiaan Klien
              </h3>
              <p className="text-gray-200">
                Privasi dan kepentingan klien adalah prioritas utama dalam setiap layanan hukum.
              </p>
            </div>

            <div data-aos="zoom-in" className="bg-white/5 p-6 rounded-lg border border-[var(--gold)]/20">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                Solutif & Tegas
              </h3>
              <p className="text-gray-200">
                Fokus pada penyelesaian hukum terbaik dengan langkah yang tepat, cepat, dan tegas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* KONTAK & CTA */}
      <section id="kontak" className="bg-[var(--charcoal)] text-white py-24 px-6 text-center">
        <div className="mt-16 border-t border-[var(--gold)]/20 pt-10 text-sm text-gray-400 space-y-4">

          {/* Info Kantor */}
          <div>
            <p className="text-white font-medium">Kantor Hukum Ahmad Kawakiby, S.H., M.H. & Partners</p>
            <p>Makassar, Sulawesi Selatan</p>
            <p>Melayani konsultasi hukum offline & online</p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 pt-4 text-[var(--gold)]">
            <a href="#" target="https://www.instagram.com/kawakiby_lawyers?igsh=MXhiNWlpejJ0amFwNA%3D%3D&utm_source=qr" className="hover:opacity-80 transition">Instagram</a>
            <a href="#" target="http://www.tiktok.com/@kawakiby_lawyers" className="hover:opacity-80 transition">Tiktok</a>
            <a href="#" target="https://www.facebook.com/share/1MPMeWY2vf/?mibextid=wwXIfr" className="hover:opacity-80 transition">Facebook</a>
          </div>

          {/* Copyright */}
          <div className="pt-6 text-xs text-gray-500 space-y-1">
            <p>© {new Date().getFullYear()} Ahmad Kawakiby, S.H., M.H. & Partners. All rights reserved.</p>
            <p className="text-gray-600">Website developed by Vernando Septian Dev.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
