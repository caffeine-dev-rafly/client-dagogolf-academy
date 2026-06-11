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
  { label: 'Years Heritage', value: '100+' },
  { label: 'Students Trained', value: '500+' },
  { label: 'Tournament Titles', value: '10+' },
  { label: 'Certifications', value: 'PGA ID' },
];

export const features: Feature[] = [
  { title: 'Elite Facility', icon: 'award', desc: 'A structured, private environment designed for comprehensive golf development in the cool Bandung highlands.' },
  { title: 'Technical Precision', icon: 'target', desc: 'Diverse training activities tailored to your specific skill level, ensuring focused improvement.' },
  { title: 'Master Coaching', icon: 'users', desc: 'Direct guidance from seasoned professionals who combine tradition with modern biomechanics.' },
  { title: 'AI Integration', icon: 'cpu', desc: 'Leveraging cutting-edge analysis technology to refine every aspect of your swing with surgical precision.' },
];

export const services: string[] = [
  'Individual & Group Training',
  'Advanced Swing Analysis',
  'Expert Strategy Consultation',
  'Custom Training Programs',
  'Tournament Preparation',
  'AI Performance Tracking',
];

export const programs: Program[] = [
  {
    title: 'Junior Excellence',
    desc: 'A specialized program for young students to accelerate interest and talent from an early age.',
    tags: ['Talent Scouting', 'Fun Environment', 'Discipline'],
    img: '/images/programs/junior-excellence.jpeg',
  },
  {
    title: 'Professional Mastery',
    desc: 'Direct coaching from instructors covering everything from fundamentals to on-course strategy.',
    tags: ['Basic to Advanced', 'Strategic Play', '1-on-1 Pro'],
    img: '/images/programs/professional-mastery.jpeg',
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
    exp: '15+ Years',
    img: '/images/aep.jpg',
    tagline: 'Turning fundamentals into instinct — one deliberate swing at a time.',
    specialties: ['Swing Biomechanics', 'Mental Game', 'Tournament Prep'],
    stats: [
      { label: 'Experience', value: '15+ yrs' },
      { label: 'Students', value: '300+' },
    ],
  },
  {
    name: 'Anjas',
    role: 'Senior Coach',
    exp: '10+ Years',
    img: '/images/anjas.jpg',
    tagline: 'Precision in the short game is where rounds are truly won.',
    specialties: ['Short Game', 'Course Strategy', 'Junior Development'],
    stats: [
      { label: 'Experience', value: '10+ yrs' },
      { label: 'Students', value: '200+' },
    ],
  },
];

export const reviews: Review[] = [
  { name: 'Andini', text: 'The AI analysis completely changed how I approach my swing. Truly a world-class facility.' },
  { name: 'Budi', text: "Heritage meets modern coaching. Dr. Aep's guidance is unparalleled in West Java." },
  { name: 'Sarah', text: 'The junior program is exceptional. My son has developed both skill and discipline.' },
];

export const galleryImages: string[] = [
  '/images/gallery/1.jpeg',
  '/images/gallery/3.jpeg',
  '/images/gallery/aep.jpeg',
  '/images/gallery/anjas.jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.34.jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.38 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.38 (2).jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.38.jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.39 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.39 (2).jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.39.jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.40 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.40 (2).jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.40.jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.41 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.41 (2).jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.41.jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.42 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.42.jpeg',
  '/images/gallery/WhatsApp Image 2026-01-21 at 12.15.58.jpeg',
  '/images/gallery/WhatsApp Image 2026-01-21 at 12.15.59.jpeg',
  '/images/gallery/WhatsApp Image 2026-01-21 at 12.17.21.jpeg',
];
