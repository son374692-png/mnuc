import {
  Calendar,
  Trophy,
  Users,
  Code2,
  Brain,
  Sparkles,
} from 'lucide-react';

export type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  tag: string;
  image: string;
};

export type Member = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Members', href: '#members' },
  { label: 'FAQ', href: '#faq' },
];

export const stats = [
  { icon: Users, value: '120+', label: 'Active Members' },
  { icon: Calendar, value: '40+', label: 'Events Hosted' },
  { icon: Code2, value: '25+', label: 'Projects Built' },
  { icon: Trophy, value: '8', label: 'Awards Won' },
];

export const focusAreas = [
  {
    icon: Brain,
    title: 'Research & Papers',
    description:
      'Members collaborate on original ML research, from computer vision to NLP, publishing findings and presenting at conferences.',
  },
  {
    icon: Code2,
    title: 'Hands-On Projects',
    description:
      'We build real-world AI applications — chatbots, recommendation systems, and predictive models used across campus.',
  },
  {
    icon: Sparkles,
    title: 'Workshops & Bootcamps',
    description:
      'From Python basics to deep learning with PyTorch, our workshops welcome every skill level and background.',
  },
  {
    icon: Trophy,
    title: 'Competitions',
    description:
      'We represent Mama Ngina University at hackathons, data science competitions, and national AI challenges.',
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: 'Intro to Deep Learning Workshop',
    date: 'Nov 2, 2026',
    time: '2:00 PM – 5:00 PM',
    location: 'Science Block, Room 204',
    description:
      'A hands-on session covering neural networks from scratch, ending with a working image classifier in PyTorch.',
    tag: 'Workshop',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 2,
    title: 'AI for Social Good Hackathon',
    date: 'Nov 15–17, 2026',
    time: '48 Hours',
    location: 'Innovation Hub',
    description:
      'Build AI solutions for local community challenges — agriculture, healthcare, and education. Prizes for top teams.',
    tag: 'Hackathon',
    image:
      'https://images.pexels.com/photos/9242841/pexels-photo-9242841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    title: 'Guest Lecture: NLP & African Languages',
    date: 'Nov 28, 2026',
    time: '4:00 PM – 6:00 PM',
    location: 'Main Auditorium',
    description:
      'Dr. Amina Karanja discusses building language models for low-resource African languages and Swahili NLP.',
    tag: 'Lecture',
    image:
      'https://images.pexels.com/photos/29180747/pexels-photo-29180747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 4,
    title: 'End-of-Year Showcase & Demo Day',
    date: 'Dec 12, 2026',
    time: '10:00 AM – 4:00 PM',
    location: 'Innovation Hub',
    description:
      'Members present their year-long projects to faculty, industry partners, and fellow students. Open to all.',
    tag: 'Showcase',
    image:
      'https://images.pexels.com/photos/7648221/pexels-photo-7648221.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const members: Member[] = [
  {
    id: 1,
    name: 'Brian Otieno',
    role: 'President & ML Researcher',
    image:
      'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Final-year Computer Science student passionate about computer vision and edge AI deployment.',
  },
  {
    id: 2,
    name: 'Faith Wanjiku',
    role: 'Vice President & NLP Lead',
    image:
      'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Focuses on transformer architectures and building language tools for Swahili and local dialects.',
  },
  {
    id: 3,
    name: 'Daniel Kimani',
    role: 'Technical Lead',
    image:
      'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Self-taught engineer who loves Kaggle competitions and mentoring first-year members.',
  },
  {
    id: 4,
    name: 'Grace Auma',
    role: 'Events Coordinator',
    image:
      'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Organises workshops and industry partnerships, bridging the gap between academia and real-world AI.',
  },
  {
    id: 5,
    name: 'Kevin Mwende',
    role: 'Data Science Lead',
    image:
      'https://images.pexels.com/photos/9271168/pexels-photo-9271168.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Statistics major specialising in predictive modelling for agriculture and climate data.',
  },
  {
    id: 6,
    name: 'Lavender Njoki',
    role: 'Outreach & Community',
    image:
      'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Leads our AI literacy programme, bringing machine learning education to secondary schools.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Brian Otieno',
    role: 'President, AI/ML Group',
    image:
      'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote:
      'Joining this group transformed my university experience. I went from never writing Python to deploying a computer vision model at the showcase in one semester.',
  },
  {
    id: 2,
    name: 'Faith Wanjiku',
    role: 'NLP Researcher',
    image:
      'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote:
      'The mentorship and collaborative energy are unmatched. We are building real tools for African languages that no one else is working on.',
  },
  {
    id: 3,
    name: 'Daniel Kimani',
    role: 'Technical Lead',
    image:
      'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote:
      'I love watching first-years arrive nervous and leave confident. The workshops are practical, inclusive, and genuinely fun.',
  },
  {
    id: 4,
    name: 'Prof. Samuel Gitau',
    role: 'Faculty Advisor',
    image:
      'https://images.pexels.com/photos/35490806/pexels-photo-35490806.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote:
      'This is the most self-driven student community I have advised in fifteen years. Their projects rival graduate-level work.',
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Do I need prior coding experience to join?',
    answer:
      'Not at all. We run an onboarding series every semester that starts from the basics of Python. If you are curious and willing to learn, you are ready to join.',
  },
  {
    id: 2,
    question: 'How do I become a member?',
    answer:
      'Attend any of our open events or workshops, then fill out the membership form at the registration desk. There are no fees — membership is free for all Mama Ngina University students.',
  },
  {
    id: 3,
    question: 'What kind of projects does the group work on?',
    answer:
      'Projects span computer vision, natural language processing, predictive analytics, and AI for social good. Members pitch ideas each semester and form teams around the most popular ones.',
  },
  {
    id: 4,
    question: 'Are events open to non-members?',
    answer:
      'Most workshops and guest lectures are open to the public. Hackathons and the showcase may require advance registration due to limited capacity.',
  },
  {
    id: 5,
    question: 'Can I join if I am not in a Computer Science programme?',
    answer:
      'Absolutely. We have members from Statistics, Mathematics, Engineering, and even the Humanities. AI is interdisciplinary, and we welcome every perspective.',
  },
  {
    id: 6,
    question: 'How often does the group meet?',
    answer:
      'We hold weekly study sessions on Wednesdays, monthly workshops, and larger events every few weeks. You can participate as much or as little as your schedule allows.',
  },
];
