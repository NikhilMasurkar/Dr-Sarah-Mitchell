// src/customData/homePageData.jsx

export const services = [
  {
    title: "Pregnancy Care",
    description:
      "Comprehensive prenatal care, delivery support, and postnatal services for a healthy pregnancy journey",
    icon: "PregnantWomanOutlined",
    path: "/obstetrics",
    color: "#E91E63",
    image:
      "https://images.pexels.com/photos/618923/pexels-photo-618923.jpeg?_gl=1*afgqph*_ga*NzIyNTQ3My4xNzUyMTY0ODU3*_ga_8JE65Q40S6*czE3NTIxNjQ4NTckbzEkZzEkdDE3NTIxNjQ4NzYkajQxJGwwJGgw",
    features: [
      "Prenatal Care",
      "Delivery Support",
      "Postnatal Care",
      "High-Risk Pregnancy",
    ],
  },
  {
    title: "Women's Health",
    description:
      "Complete gynaecological services including PCOS, endometriosis, menopause care and preventive health",
    icon: "FavoriteOutlined",
    path: "/gynaecology",
    color: "#CA0858",
    image:
      "https://images.pexels.com/photos/7089399/pexels-photo-7089399.jpeg?_gl=1*15xz33o*_ga*NzIyNTQ3My4xNzUyMTY0ODU3*_ga_8JE65Q40S6*czE3NTIxNjQ4NTckbzEkZzEkdDE3NTIxNjQ5NTEkajM2JGwwJGgw",
    features: [
      "PCOS Treatment",
      "Menopause Care",
      "Preventive Health",
      "Contraceptive Advice",
    ],
  },
  {
    title: "Specialist Care",
    description:
      "Expert medical care with FRANZCOG qualification and years of experience in women's health",
    icon: "HealthAndSafetyOutlined",
    path: "/profile",
    color: "#6C5CE7",
    image:
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: [
      "FRANZCOG Specialist",
      "Expert Care",
      "Personalized Treatment",
      "Compassionate Approach",
    ],
  },
];

export const testimonials = [
  {
    name: "Jennifer M.",
    text: "Dr. Sarah provided exceptional care throughout my pregnancy. Her expertise and compassionate approach made all the difference.",
    rating: 5,
    location: "Werribee",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Amanda T.",
    text: "Professional, knowledgeable, and caring. Dr. Sarah takes time to listen and explain everything clearly.",
    rating: 5,
    location: "Pointcook",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Rachel K.",
    text: "Outstanding service and support. Dr. Sarah's gentle approach gave me confidence throughout my treatment.",
    rating: 5,
    location: "Tarneit",
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export const highlights = [
  "FRANZCOG Specialist",
  "Female Doctor",
  "English Speaking",
  "Werribee Location",
];

export const stats = [
  { number: "12+", label: "Years Experience", icon: "LocalHospital" },
  { number: "800+", label: "Happy Mothers", icon: "ChildCare" },
  { number: "2", label: "Hospital Appointments", icon: "LocalHospital" },
  { number: "1", label: "Language", icon: "Favorite" },
];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Dr. Sarah Mitchell",
  description:
    "Female Obstetrician & Gynaecologist providing comprehensive women's health services in Melbourne",
  url: "https://drsarahmitchell.com.au",
  telephone: "0416151600",
  email: "info@drsarahmitchell.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Werribee",
    addressRegion: "Victoria",
    addressCountry: "Australia",
  },
  medicalSpecialty: ["Obstetrics", "Gynaecology"],
  areaServed: ["Werribee", "Pointcook", "Tarneit", "Wyndham"],
};

export const galleryImages = [
  "https://images.pexels.com/photos/30435352/pexels-photo-30435352.jpeg?_gl=1*9otd98*_ga*NzIyNTQ3My4xNzUyMTY0ODU3*_ga_8JE65Q40S6*czE3NTIxNjQ4NTckbzEkZzEkdDE3NTIxNjUwMzIkajM0JGwwJGgw",
  "https://images.pexels.com/photos/1973270/pexels-photo-1973270.jpeg?_gl=1*6jd2nc*_ga*NzIyNTQ3My4xNzUyMTY0ODU3*_ga_8JE65Q40S6*czE3NTIxNjQ4NTckbzEkZzEkdDE3NTIxNjUxNzMkajYkbDAkaDA.",
  "https://images.pexels.com/photos/159767/baby-cute-moe-brilliant-159767.jpeg?_gl=1*1mo4l3h*_ga*NzIyNTQ3My4xNzUyMTY0ODU3*_ga_8JE65Q40S6*czE3NTIxNjQ4NTckbzEkZzEkdDE3NTIxNjUxOTkkajUyJGwwJGgw",
  "https://images.pexels.com/photos/1157389/pexels-photo-1157389.jpeg?_gl=1*1q5lk3u*_ga*NzIyNTQ3My4xNzUyMTY0ODU3*_ga_8JE65Q40S6*czE3NTIxNjQ4NTckbzEkZzEkdDE3NTIxNjUyMzkkajEyJGwwJGgw",
  "https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1096140/pexels-photo-1096140.jpeg?_gl=1*1aqfvzc*_ga*NzIyNTQ3My4xNzUyMTY0ODU3*_ga_8JE65Q40S6*czE3NTIxNjQ4NTckbzEkZzEkdDE3NTIxNjUyODMkajQ3JGwwJGgw",
];
