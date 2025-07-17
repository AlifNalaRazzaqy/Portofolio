import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Alif Nala",
  lastName: "Razzaqy",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Informatics Student",
  avatar: "/images/AlifNalaRazzaqy.jpg",
  email: "razzaqyalifnala@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Bahasa Indonesia", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Let’s Learn & Build Together!</>,
  description: (
    <>
      I share my journey in tech, favorite tools, and coding experiments. No spam, just stories and
      resources you might love.
    </>
  ),
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AlifNalaRazzaqy",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alif-nala-razzaqy/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/alifnala_razzaqy/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:razzaqyalifnala@gmail.com`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Exploring the intersection of code, creativity, and user experience</>,
  featured: {
    display: true,
    title: <>Latest project: <strong className="ml-4">SMART App</strong></>,
    href: "/work/smart-activity-manager-app",
  },
  subline: (
    <>
      I'm a Computer Science student passionate about all things tech.
      <br /> I enjoy diving into software engineering, UI/UX design, mobile development, and game development — always eager to learn and build something meaningful.
    </>
  ),
};


const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Alif Nala Razzaqy is a passionate Computer Science student based in {person.location}, with
        a deep curiosity for all things tech. His interests include software engineering, UI/UX design,
        mobile app development, and game development. He enjoys building meaningful digital experiences
        and is always eager to learn, explore, and innovate at the intersection of technology and creativity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SMART App – Kampus Project",
        timeframe: "2025",
        role: "UI/UX Designer",
        achievements: [
          <>
             Designed and implemented a modern, responsive UI for the SMART App, improving user task
             completion speed by 30%.
          </>,
          <>
            Created design components and layout systems using Jetpack Compose, optimized for productivity and
            clarity.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/SmartApp.jpg",
            alt: "Once UI Project",
            width: 19,
            height: 9,
          },
        ],
      },
      {
        company: "Music Recommender",
        timeframe: "2025",
        role: "AI System Designer",
        achievements: [
          <>
            Developed a content-based filtering system using NLP to generate playlist recommendations based on user mood and genre.
          </>,
          <>
            Integrated Deezer API for audio previews and built a Streamlit-based UI, increasing engagement by 25%.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/deepmusicrecommender.jpg",
            alt: "Once UI Project",
            width: 19,
            height: 9,
          },
          {
            src: "/images/projects/project-01/DataVisualization.jpg",
            alt: "Once UI Project",
            width: 19,
            height: 9,
          },
          
        ],
      },
    ],
  },
  studies: {
  display: true,
  title: "Studies",
  institutions: [
    {
      name: "Universitas Pembangunan Nasional Veteran Jakarta",
      description: (
        <>
          Mahasiswa program studi <strong>Informatika</strong>. Aktif dalam berbagai organisasi, seperti:
          <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
            <li>
              Anggota kelas videografi di <strong>UFO "Veteran" Jakarta</strong> sejak Agustus 2024.
            </li>
            <li>
              <strong>Staf Human Resources</strong> di organisasi <strong>Catur UPN Veteran Jakarta</strong>.
            </li>
            <li>
              <strong>Videografer</strong> untuk <strong>ClimateHub Indonesia</strong>, berkontribusi dalam produksi dokumentasi dan konten kreatif.
            </li>
          </ul>
        </>
      ),
    },
  ],
},

  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Employability",
      description: (
        <>
          Mengikuti program <strong>21st Century Employability Skills Program - Advanced</strong> yang meningkatkan soft skill, komunikasi, dan kerja tim profesional.
        </>
      ),
      images: [],
    },
    {
      title: "C Programming",
      description: <>Menyelesaikan pelatihan <strong>Memulai Pemrograman dengan C</strong>.</>,
      images: [],
    },
    {
      title: "Cybersecurity",
      description: (
        <>
          Telah mempelajari berbagai topik keamanan siber melalui program <strong>Cisco Ethical Hacker</strong> dan <strong>Introduction to Cybersecurity</strong>, mencakup:
          <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
            <li>Cybersecurity tools</li>
            <li>Internet Protocol Suite (TCP/IP)</li>
            <li>Data privacy & computer networking</li>
          </ul>
        </>
      ),
      images: [],
    },
    {
      title: "Human Resources",
      description: (
        <>
          Berperan sebagai <strong>Staf HR</strong> di organisasi <strong>Catur UPN Veteran Jakarta</strong>,
          bertanggung jawab dalam manajemen anggota dan koordinasi kegiatan.
        </>
      ),
      images: [],
    },
    {
      title: "Videography",
      description: (
        <>
          Memiliki pengalaman videografi di berbagai organisasi:
          <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
            <li>Anggota kelas videografi <strong>UFO "Veteran" Jakarta</strong></li>
            <li>Videografer untuk <strong>ClimateHub Indonesia</strong></li>
          </ul>
        </>
      ),
      images: [],
    },
    {
      title: "English Communication",
      description: (
        <>
          Peningkatan keterampilan bahasa Inggris melalui program <strong>Employability Skills</strong>.
        </>
      ),
      images: [],
    },
  ],
},
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/6.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
