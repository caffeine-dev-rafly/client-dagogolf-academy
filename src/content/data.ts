// Central content source for the landing page. Edit copy here — layout lives
// in src/components/sections/*. Swap placeholder coach copy for real bios.

export type Stat = { label: string; value: string };
export type Feature = { title: string; desc: string; icon: 'award' | 'target' | 'users' | 'cpu' };
export type Program = { title: string; desc: string; tags: string[]; img: string };
export type Step = { step: string; icon: string; title: string; desc: string };
export type Review = { name: string; text: string };

export type Coach = {
  name: string;
  role: string;
  exp: string;
  img: string;
  /** Short editorial tagline — replace with the coach's real positioning. */
  tagline: string;
  /** Focus areas shown as chips. */
  specialties: string[];
  /** Two headline numbers shown on the card. */
  stats: { label: string; value: string }[];
};

export const stats: Stat[] = [
  { label: 'Tahun Warisan', value: '100+' },
  { label: 'Siswa Terlatih', value: '500+' },
  { label: 'Gelar Turnamen', value: '10+' },
  { label: 'Sertifikasi', value: 'PGA ID' },
];

export const features: Feature[] = [
  { title: 'Fasilitas Elit', icon: 'award', desc: 'Lingkungan privat terstruktur yang dirancang untuk pengembangan golf komprehensif di dataran tinggi Bandung yang sejuk.' },
  { title: 'Presisi Teknis', icon: 'target', desc: 'Beragam aktivitas pelatihan yang disesuaikan dengan tingkat keahlian spesifik Anda, memastikan peningkatan yang terfokus.' },
  { title: 'Pelatih Ahli', icon: 'users', desc: 'Bimbingan langsung dari para profesional berpengalaman yang memadukan tradisi dengan biomekanik modern.' },
  { title: 'Integrasi AI', icon: 'cpu', desc: 'Memanfaatkan teknologi analisis mutakhir untuk menyempurnakan setiap aspek ayunan Anda dengan presisi bedah.' },
];

export const services: string[] = [
  'Pelatihan Individu & Grup',
  'Analisis Swing Lanjutan',
  'Konsultasi Strategi Ahli',
  'Program Latihan Kustom',
  'Persiapan Turnamen',
  'Pelacakan Performa AI',
];

export const programs: Program[] = [
  {
    title: 'Junior Excellence',
    desc: 'Program khusus bagi siswa muda untuk mempercepat minat dan bakat sejak usia dini.',
    tags: ['Pencarian Bakat', 'Lingkungan Menyenangkan', 'Disiplin'],
    img: '/images/programs/junior-excellence-v2.jpeg',
  },
  {
    title: 'Professional Mastery',
    desc: 'Pelatihan langsung dari instruktur yang mencakup segalanya mulai dari dasar-dasar hingga strategi di lapangan.',
    tags: ['Dasar hingga Lanjutan', 'Permainan Strategis', 'Pro 1-on-1'],
    img: '/images/programs/professional-mastery-v2.jpeg',
  },
];

export const curriculum: Step[] = [
  {
    step: '01',
    icon: '🔍',
    title: 'Asesmen Awal',
    desc: 'Evaluasi komprehensif terhadap level teknik, fisik, dan mental Anda untuk menyusun program latihan yang paling efektif.',
  },
  {
    step: '02',
    icon: '🏌️',
    title: 'Pengembangan Teknik',
    desc: 'Sesi latihan terstruktur mencakup grip, stance, backswing, downswing, dan follow-through dengan analisis video swing.',
  },
  {
    step: '03',
    icon: '🗺️',
    title: 'Manajemen Lapangan',
    desc: 'Belajar membaca lapangan, memilih stik, menghitung angin, dan mengembangkan strategi bermain 18 hole secara cerdas.',
  },
  {
    step: '04',
    icon: '🏆',
    title: 'Mental & Kompetisi',
    desc: 'Pengembangan ketangguhan mental, manajemen tekanan kompetisi, dan persiapan fisik untuk turnamen resmi.',
  },
];

export const coaches: Coach[] = [
  {
    name: 'Dr. Aep',
    role: 'Head Professional',
    exp: '15+ Tahun',
    img: '/images/aep.jpg',
    tagline: 'Mengubah dasar-dasar menjadi insting — satu ayunan terukur setiap saat.',
    specialties: ['Biomekanik Swing', 'Permainan Mental', 'Persiapan Turnamen'],
    stats: [
      { label: 'Pengalaman', value: '15+ thn' },
      { label: 'Siswa', value: '300+' },
    ],
  },
  {
    name: 'Anjas',
    role: 'Senior Coach',
    exp: '10+ Tahun',
    img: '/images/anjas.jpg',
    tagline: 'Presisi dalam permainan pendek adalah kunci kemenangan yang sesungguhnya.',
    specialties: ['Short Game', 'Strategi Lapangan', 'Pengembangan Junior'],
    stats: [
      { label: 'Pengalaman', value: '10+ thn' },
      { label: 'Siswa', value: '200+' },
    ],
  },
];

export const reviews: Review[] = [
  { name: 'Andini', text: 'Analisis AI benar-benar mengubah cara saya melakukan swing. Fasilitas kelas dunia.' },
  { name: 'Budi', text: "Warisan bertemu pelatihan modern. Bimbingan Dr. Aep tidak tertandingi di Jawa Barat." },
  { name: 'Sarah', text: 'Program juniornya luar biasa. Anak saya mengembangkan keahlian dan disiplin.' },
];

export const galleryImages: string[] = [
  '/images/gallery/dg-01.jpeg',
  '/images/gallery/dg-02.jpeg',
  '/images/gallery/dg-03.jpeg',
  '/images/gallery/dg-04.jpeg',
  '/images/gallery/dg-05.jpeg',
  '/images/gallery/dg-06.jpeg',
  '/images/gallery/dg-07.jpeg',
  '/images/gallery/dg-08.jpeg',
  '/images/gallery/dg-09.jpeg',
  '/images/gallery/dg-10.jpeg',
  '/images/gallery/dg-11.jpeg',
];
