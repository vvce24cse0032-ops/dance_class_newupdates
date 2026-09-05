export interface EventItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  disciple?: string;
  portrait?: string;
  description: string;
  dateTime?: string;
  venue?: string;
  guests?: string;
  invitationUrl?: string;
  brochureUrl?: string;
  isUpcoming?: boolean;
}

export interface PastPerformanceItem {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  date: string;
  venue?: string;
  guests?: string;
  honouredGuests?: string[];
  description: string;
  image?: string;
  invitationUrl?: string;
  brochureUrl?: string;
  tags?: string[];
}

export interface RangapraveshaDisciple {
  name: string;
  date: string;
  guests: string;
  venue: string;
  portrait?: string;
  invitationUrl?: string;
  brochureUrl?: string;
}

export interface RangapraveshaYearGroup {
  year: string;
  entries: {
    title?: string;
    date: string;
    guests: string;
    venue: string;
    invitationUrl?: string;
    brochureUrl?: string;
    portrait?: string;
    disciples?: {
      name: string;
      portrait?: string;
      brochureUrl?: string;
      invitationUrl?: string;
    }[];
  }[];
}

export interface PressItem {
  id: string;
  title: string;
  publication: string;
  date?: string;
  image: string;
  description?: string;
}

export interface VideoMilestone {
  id: string;
  title: string;
  youtubeId: string;
  subtitle: string;
}

export interface TrusteeItem {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export const HERO_DATA = {
  kicker: 'A Sanctuary of Classical Excellence',
  titleLine1: 'Nruthyathi',
  titleLine2: 'Kalaashaale',
  subtitle: 'Divine Motion',
  tagline: 'Tradition • Devotion • Excellence',
  bgImage: '/images/RAW05165.jpg',
};

export const ABOUT_DATA = {
  kicker: 'Legacy of Excellence',
  heading: 'Artistic Devotion',
  founder: 'Smt. Anusha Varun',
  highlight: 'nurtures over 500 students, blending the technical precision of the Vasundhara style with deep spiritual expression.',
  body: "Rooted in tradition and shaped by decades of disciplined practice, our institute offers a structured journey — from a student's first steps in rhythm to the milestone of a solo Rangapravesha — nurturing both technical mastery and inner devotion.",
  profilePdf: '/pdfs/Profile of Smt. Anusha Varun.pdf',
  image: '/images/RAW03170.jpg',
};

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'samaagama-2026',
    badge: 'Annual Festival',
    title: 'Samaagama 2026',
    subtitle: 'Annual Showcase',
    description: 'Our flagship annual celebration. Witness the collective energy of our students in a grand showcase of Indian classical excellence.',
    dateTime: 'Annual Festival · Dates to be announced',
    venue: 'Mysuru',
    isUpcoming: true,
  },
];

export const PAST_PERFORMANCES_DATA: PastPerformanceItem[] = [
  {
    id: 'anugraha',
    badge: 'Thematic Presentation',
    title: 'ANUGRAHA',
    subtitle: 'Kshaathra Draupadi — Bharatanatyam Thematic Presentation',
    date: 'Sunday, 30 August · 5:30 PM',
    venue: 'Vasundhara Bhavana, Kalandika, Saraswatipuram, Mysuru',
    honouredGuests: [
      'Dr. Kripa Phadke',
      'Dr. Sheela Sridhar',
      'Guru Sri Sandesh Bharghav',
    ],
    guests: 'Dr. Kripa Phadke, Dr. Sheela Sridhar, Guru Sri Sandesh Bharghav',
    description:
      'A rare glimpse of a five-generation legacy: Bharatanatyam Thematic Presentation "Kshaathra Draupadi" by Karnataka Kalathilaka, SNS Awardee Guru DR. Vasundhara Doraswamy. An evocative production blending sculptural precision, intense rhythmic footwork, and deep spiritual expression.',
    image: '/images/RAW03377.jpg',
    tags: ['Thematic Presentation', 'Vasundhara Style', 'Guru Dr. Vasundhara Doraswamy'],
  },
];

export const RANGAPRAVESHA_DATA: RangapraveshaYearGroup[] = [
  {
    year: '2026',
    entries: [
      {
        title: 'Kum. Harshini Iyer',
        date: 'Sunday, 25 January 2026 · 4:30 PM',
        guests: 'Dr. Tulasi Ramachandra (Nrithyalaya Trust, Mysuru) & Prof. G. Hemanth Kumar (Former Vice Chancellor, Mysuru University)',
        venue: 'Jaganmohan Palace (Sri Jayachamarajendra Art Gallery & Auditorium), Mysuru',
        portrait: '/images/rangapravesha/harshini-iyer/portrait.jpg',
        invitationUrl: '/images/rangapravesha/harshini-iyer/invitation-1.jpg',
        brochureUrl: '/images/rangapravesha/harshini-iyer/brochure.jpg',
      },
      {
        title: 'Kum. Nithyashree',
        date: 'Saturday, 25 July 2026 · 4:30 PM',
        guests: 'Dr. Krupa Phadke (Nrityagiri Academy of Performing Arts and Research Centre) & Dr. B. Sadashive Gowda (Vidyavardhaka College of Engineering)',
        venue: 'Ramagovinda Rangamandira, Ramakrishnanagar, Mysuru',
        portrait: '/images/events/nithyashree/portrait.jpg',
        invitationUrl: '/images/events/nithyashree/invitation-1.jpg',
        brochureUrl: '/images/events/nithyashree/brochure.jpg',
      },
    ],
  },
  {
    year: '2025',
    entries: [
      {
        title: 'Dr. Poornima K · Dr. Prarthana Y Gowda · Kum. Vandana Y Gowda',
        date: 'Sunday, 30 November 2025 · 4:30 PM',
        guests: 'Natyacharya K. Ramamurthy Rao, Director, Noopura Kalavidaru Cultural Trust, Mysuru',
        venue: 'JCAC – Jagannatha Center for Art & Culture, Vijayanagar, Mysuru',
        invitationUrl: '/images/rangapravesha/2025-joint/invitation-1.jpg',
        disciples: [
          {
            name: 'Dr. Poornima K',
            portrait: '/images/rangapravesha/poornima-k/portrait.jpg',
            brochureUrl: '/images/rangapravesha/poornima-k/brochure.jpg',
          },
          {
            name: 'Dr. Prarthana Y Gowda',
            portrait: '/images/rangapravesha/prarthana-y-gowda/portrait.jpg',
            brochureUrl: '/images/rangapravesha/prarthana-y-gowda/brochure.jpg',
          },
          {
            name: 'Kum. Vandana Y Gowda',
            portrait: '/images/rangapravesha/vandana-y-gowda/portrait.jpg',
            brochureUrl: '/images/rangapravesha/vandana-y-gowda/brochure.jpg',
          },
        ],
      },
    ],
  },
  {
    year: '2023',
    entries: [
      {
        title: 'Kumari Aisiri D',
        date: 'Sunday, 24 December 2023 · 5:30 PM',
        guests: 'Sri G.T. Devegowda, MLA, Chamundeshwari Constituency, Mysuru',
        venue: 'Ramagovinda Rangamandira, Ramakrishnanagar, Mysuru',
        portrait: '/images/rangapravesha/aisiri-d/portrait.jpg',
        invitationUrl: '/images/rangapravesha/aisiri-d/invitation-1.jpg',
        brochureUrl: '/images/rangapravesha/aisiri-d/brochure.jpg',
      },
    ],
  },
];

export const PRESS_ITEMS: PressItem[] = [
  {
    id: 'aisiri-2023-kannadaprabha',
    title: 'Rangapravesha of Kum. Aisiri D announced',
    publication: 'Kannada Prabha',
    date: 'Dec 21, 2023',
    image: '/images/press/aisiri-2023-kannadaprabha.jpg',
  },
  {
    id: 'aisiri-2023-star-of-mysore',
    title: '"Rangavidhipraveshika of D. Aisiri tomorrow"',
    publication: 'Star of Mysore',
    date: 'Dec 23, 2023',
    image: '/images/press/aisiri-2023-star-of-mysore.jpg',
  },
  {
    id: 'samaagama-2024',
    title: '"Nruthyathi Kalaashaale presents Samaagama-2024"',
    publication: 'Star of Mysore',
    date: 'Sep 4, 2024',
    image: '/images/press/samaagama-2024.jpg',
  },
  {
    id: 'kalemane-utsava-2024',
    title: 'Guru Anusha Varun featured at the 44th Nirantara Kalemane Utsava',
    publication: 'Kannada Prabha',
    date: 'Sep 28, 2024',
    image: '/images/press/kalemane-utsava-2024.jpg',
  },
  {
    id: 'samaagama-2025-preview',
    title: '"Samaagama 2025: Bharatanatyam Festival in city on Aug. 30, 31"',
    publication: 'Star of Mysore',
    date: 'Aug 25, 2025',
    image: '/images/press/samaagama-2025-preview.jpg',
  },
  {
    id: 'samaagama-2025-report',
    title: '"Samaagama 2025: A grand celebration of dance and devotion in city"',
    publication: 'Star of Mysore',
    date: 'Aug 2025',
    image: '/images/press/samaagama-2025-report.jpg',
  },
  {
    id: 'trio-rangapravesha-2025-preview',
    title: '"Mother-daughters trio performance" — Poornima, Prarthana & Vandana',
    publication: 'Star of Mysore',
    date: 'Nov 27, 2025',
    image: '/images/press/trio-rangapravesha-2025-preview.jpg',
  },
  {
    id: 'trio-rangapravesha-2025-report',
    title: '"A historic evening of Bharatanatyam"',
    publication: 'Star of Mysore',
    date: 'Dec 2025',
    image: '/images/press/trio-rangapravesha-2025-report.jpg',
  },
  {
    id: 'harshini-2026-preview',
    title: '"Harshini to present Bharatanatyam Rangavidhipraveshika on Jan. 25"',
    publication: 'Star of Mysore',
    date: 'Jan 19, 2026',
    image: '/images/press/harshini-2026-preview.jpg',
  },
  {
    id: 'harshini-2026-report',
    title: '"Bharatanatyam Rangavidhipraveshika enthrals audience"',
    publication: 'Star of Mysore',
    date: 'Feb 4, 2026',
    image: '/images/press/harshini-2026-report.jpg',
  },
  {
    id: 'nithyashree-2026-preview',
    title: '"Bharatanatyam Rangavidhipraveshika" — featuring Nithyashree',
    publication: 'Star of Mysore',
    date: 'Jul 19, 2026',
    image: '/images/press/nithyashree-2026-preview.jpg',
  },
  {
    id: 'nithyashree-2026-report',
    title: '"Enthralling Bharatanatyam Rangavidhipraveshika"',
    publication: 'Star of Mysore',
    date: 'Aug 20, 2026',
    image: '/images/press/nithyashree-2026-report.jpg',
  },
];

export const GALLERY_IMAGES = [
  { src: '/images/1.jpg', alt: 'Nruthyathi Kalaashaale student performance pose 1' },
  { src: '/images/2.jpg', alt: 'Nruthyathi Kalaashaale student performance pose 2' },
  { src: '/images/3.jpg', alt: 'Nruthyathi Kalaashaale student performance pose 3' },
  { src: '/images/4.jpg', alt: 'Nruthyathi Kalaashaale student performance pose 4' },
  { src: '/images/5.jpg', alt: 'Nruthyathi Kalaashaale student performance pose 5' },
  { src: '/images/6.jpg', alt: 'Nruthyathi Kalaashaale student performance pose 6' },
  { src: '/images/7.jpg', alt: 'Nruthyathi Kalaashaale student performance pose 7' },
  { src: '/images/RAW03170.jpg', alt: 'Nruthyathi Kalaashaale Bharatanatyam performance' },
  { src: '/images/RAW03377.jpg', alt: 'Nruthyathi Kalaashaale stage performance' },
  { src: '/images/RAW05082.jpg', alt: 'Nruthyathi Kalaashaale group formation' },
  { src: '/images/DSC06732.jpg', alt: 'Nruthyathi Kalaashaale ceremony' },
  { src: '/images/DSC06987.jpg', alt: 'Nruthyathi Kalaashaale artistic expression' },
  { src: '/images/RKV_3220.jpg', alt: 'Nruthyathi Kalaashaale Rangapravesha recital' },
  { src: '/images/RKV_3229.jpg', alt: 'Nruthyathi Kalaashaale Bharatanatyam mudras' },
];

export const VIDEO_MILESTONES: VideoMilestone[] = [
  {
    id: 'aisiri-d',
    title: 'Kum. Aisiri D',
    youtubeId: 'lFL5n31P99k',
    subtitle: 'Solo Rangavidhipraveshika Recital',
  },
  {
    id: 'institutional-trio',
    title: 'Institutional Trio',
    youtubeId: 'GIQfQzpwkfk',
    subtitle: 'Historic Mother-Daughters Recital',
  },
  {
    id: 'harshini-iyer',
    title: 'Kum. Harshini Iyer',
    youtubeId: 'BASxn-P7HO8',
    subtitle: 'Solo Rangavidhipraveshika Recital',
  },
  {
    id: 'nithyashree',
    title: 'Kum. Nithyashree',
    youtubeId: '4H-Oj768FfU',
    subtitle: 'Solo Rangavidhipraveshika Recital',
  },
];

export const TRUSTEES_DATA: TrusteeItem[] = [
  {
    name: 'Anusha Varun',
    role: 'Founder & Managing Trustee',
    image: '/images/trustees/anusha-varun.jpg',
  },
  {
    name: 'Varun Srinath',
    role: 'Executive Secretary',
    image: '/images/trustees/varun-srinath.jpg',
  },
];

export const CONTACT_DATA = {
  email: 'contact@nruthyathikalaashaale.com',
  emailHref: 'mailto:contact@nruthyathikalaashaale.com',
  location: 'Vivekanandanagar, Mysuru',
  mapsLink: 'https://maps.app.goo.gl/7Uc2YsaWmia74DWL6',
};

export interface NotablePerformanceItem {
  id: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
}

export const NOTABLE_PERFORMANCES: NotablePerformanceItem[] = [
  {
    id: 'chidambaram-natyanjali',
    title: 'Chidambaram Natyanjali',
    category: 'Sacred Temple Festival',
    location: 'Thillai Nataraja Temple, Chidambaram',
    summary: 'Team Nruthyathi led in classical dance presentation at the historic Chidambaram Natyanjali.',
    description: 'A deeply reverent classical recital presented by Team Nruthyathi at the sanctum sanctorum of Lord Nataraja in Chidambaram, upholding the age-old sacred traditions of Bharatanatyam.',
    image: '/images/RAW05165.jpg',
    tags: ['Chidambaram Natyanjali', 'Temple Recital', 'Team Nruthyathi'],
  },
  {
    id: 'mysuru-dasara',
    title: 'Mysuru Dasara Performances',
    category: 'State Cultural Mahotsav',
    location: 'Mysuru, Karnataka',
    summary: 'Team Nruthyathi performances at the world-renowned Mysuru Dasara Mahotsav.',
    description: 'Graceful group and solo presentations at the state cultural celebrations of Mysuru Dasara, presenting rhythmic precision and vibrant classical storytelling to thousands of connoisseurs.',
    image: '/images/DSC06732.jpg',
    tags: ['Mysuru Dasara', 'Cultural Mahotsav', 'Team Nruthyathi'],
  },
  {
    id: 'samaagama-festival-series',
    title: 'SAMAAGAMA Annual Festivals',
    category: 'Annual Classical Dance Festival',
    location: 'Mysuru',
    summary: 'Annual Bharatanatyam festival series organized and curated by Nruthyathi Kalaashaale.',
    description: 'A celebrated multi-edition classical festival providing an esteemed cultural platform for young disciples to perform alongside senior doyens of classical Indian dance.',
    image: '/images/press/samaagama-2025-report.jpg',
    tags: ['Samaagama', 'Annual Festival', 'Classical Heritage'],
  },
  {
    id: 'tedx-nrutya-naatakothsava',
    title: 'TEDxJSSMC & Nrutya Naatakothsava',
    category: 'Thematic & Cultural Productions',
    location: 'Mysuru',
    summary: 'Leading Team Nruthyathi in prestigious stage productions and thematic showcases.',
    description: 'Presentations combining dynamic choreography, expressive abhinaya, and cultural narratives across distinguished academic and performing arts stages in Mysuru.',
    image: '/images/RKV_3220.jpg',
    tags: ['TEDxJSSMC', 'Nrutya Naatakothsava', 'Thematic Productions'],
  },
];
