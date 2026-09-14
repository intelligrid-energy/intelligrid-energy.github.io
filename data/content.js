/* ============================================================
   IntelliGrid Energy Dynamic — Site Content Data
   ------------------------------------------------------------
   EDIT THIS FILE to update team members, products, projects,
   publications, instruments, news and gallery items.
   Every entry marked with [ ... ] is a PLACEHOLDER — replace
   with verified, real information before publishing.
   See README.md → "How to update content" for field docs.
   ============================================================ */

window.SITE_DATA = {

  lab: {
    name: "IntelliGrid Energy Dynamic",
    tagline: "Intelligent Energy Systems. Smarter Grids. Sustainable Future.",
    department: "Department of Electrical Engineering",
    institute: "National Institute of Technology Rourkela",
    address: "Department of Electrical Engineering, NIT Rourkela, Rourkela, Odisha, 769008, India",
    email: "[Official Email Address]",
    phone: "[Official Telephone Number]",
    whatsapp: "+91 94333 79717",
    mapEmbedUrl: "" // [Add verified Google Maps embed URL for the department building]
  },

  director: {
    name: "Dr. Arnab Ghosh",
    designation: "Professor Grade 1",
    department: "Department of Electrical Engineering",
    institute: "National Institute of Technology Rourkela",
    photo: "",
    bio: "[Lab director biography — to be supplied and verified]",
    qualifications: ["[Academic qualification — placeholder]"],
    researchInterests: ["Smart Grids", "Power Electronics", "Energy Systems"],
    facultyProfileUrl: "[Link to official NIT Rourkela faculty profile page]"
  },

  // ---------- Research areas (homepage preview subset) ----------
  researchAreas: [
    { icon: "grid", title: "Smart Grid Technologies", desc: "Intelligent monitoring, control, and automation of modern power grids." },
    { icon: "cpu", title: "Power Electronics & Converter Control", desc: "Design and control of converters for efficient power conversion." },
    { icon: "sun", title: "Renewable Energy Integration", desc: "Grid-integration strategies for solar, wind, and hybrid renewable sources." },
    { icon: "battery", title: "Energy Storage Systems", desc: "Battery management, sizing, and optimization for storage-backed grids." },
    { icon: "cpu-chip", title: "Microgrids & Distributed Resources", desc: "Coordinated operation of microgrids and distributed energy resources." },
    { icon: "brain", title: "AI/ML for Energy Systems", desc: "Machine learning applications in forecasting, control, and diagnostics." }
  ],

  // ---------- Team (placeholders beyond the director) ----------
  team: {
    faculty: [
      { name: "[Faculty / Research Collaborator Name]", role: "Faculty Collaborator", interests: ["[Research interest]"], photo: "", bio: "[Short biography]", links: {} }
    ],
    phd: [
      { name: "[PhD Research Scholar Name]", role: "PhD Research Scholar", interests: ["[Research topic]"], photo: "", bio: "[Short biography]", links: {} },
      { name: "[PhD Research Scholar Name]", role: "PhD Research Scholar", interests: ["[Research topic]"], photo: "", bio: "[Short biography]", links: {} }
    ],
    masters: [
      { name: "[Master's / UG Researcher Name]", role: "M.Tech Researcher", interests: ["[Research topic]"], photo: "", bio: "[Short biography]", links: {} }
    ],
    staff: [
      { name: "[Project Staff Name]", role: "Technical Staff", interests: [], photo: "", bio: "[Short biography]", links: {} }
    ],
    alumni: [
      { name: "[Alumni Name]", role: "Former PhD Scholar", interests: [], photo: "", bio: "[Current position]", links: {} }
    ]
  },

  // ---------- Featured projects (homepage subset) ----------
  projects: [
    { id: "PRJ-001", title: "[Project Title — Ongoing]", status: "ongoing", agency: "[Funding Agency]", desc: "[Short project description]" },
    { id: "PRJ-002", title: "[Project Title — Completed]", status: "completed", agency: "[Funding Agency]", desc: "[Short project description]" },
    { id: "PRJ-003", title: "[Project Title — Proposed]", status: "proposed", agency: "[Funding Agency]", desc: "[Short project description]" }
  ],

  // ---------- Product catalogue (full) ----------
  // "featured" items appear on the homepage. Every field is safe to edit —
  // set image/gallery to real file paths, price to a real value or "" to
  // show "Request a Quote", and fill in specs/features/applications/faqs.
  products: [
    {
      id: "PROD-001", name: "[Smart Grid Monitoring Unit]", category: "Smart Grid Solutions",
      price: "", availability: "Request a Quote", featured: true, dateAdded: "2026-01-01",
      image: "", gallery: [],
      shortDesc: "[Short product description — one or two lines]",
      description: "[Detailed product description — to be supplied. Describe what the unit does, how it is used, and what problem it solves.]",
      specs: { "Input Voltage": "[Value]", "Communication": "[Protocol]", "Accuracy": "[Value]", "Enclosure": "[Rating]" },
      features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
      applications: ["[Application 1]", "[Application 2]"],
      datasheetUrl: "",
      faqs: [{ q: "[Sample FAQ question]", a: "[Answer — to be supplied]" }]
    },
    {
      id: "PROD-002", name: "[Smart Energy Monitor]", category: "Energy Monitoring Systems",
      price: "", availability: "Request a Quote", featured: true, dateAdded: "2026-01-05",
      image: "", gallery: [],
      shortDesc: "[Short product description — one or two lines]",
      description: "[Detailed product description — to be supplied.]",
      specs: { "Measurement Channels": "[Value]", "Sampling Rate": "[Value]", "Connectivity": "[Wi-Fi / Ethernet / etc.]", "Power Supply": "[Value]" },
      features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
      applications: ["[Application 1]", "[Application 2]"],
      datasheetUrl: "",
      faqs: [{ q: "[Sample FAQ question]", a: "[Answer — to be supplied]" }]
    },
    {
      id: "PROD-003", name: "[DC-DC Converter Module]", category: "Power Electronics Converters",
      price: "", availability: "Request a Quote", featured: true, dateAdded: "2026-01-10",
      image: "", gallery: [],
      shortDesc: "[Short product description — one or two lines]",
      description: "[Detailed product description — to be supplied.]",
      specs: { "Input Range": "[Value]", "Output Power": "[Value]", "Efficiency": "[Value]", "Topology": "[Value]" },
      features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
      applications: ["[Application 1]", "[Application 2]"],
      datasheetUrl: "",
      faqs: [{ q: "[Sample FAQ question]", a: "[Answer — to be supplied]" }]
    },
    {
      id: "PROD-004", name: "[Embedded Controller Board]", category: "Embedded Control Systems",
      price: "", availability: "Request a Quote", featured: false, dateAdded: "2025-12-20",
      image: "", gallery: [],
      shortDesc: "[Short product description — one or two lines]",
      description: "[Detailed product description — to be supplied.]",
      specs: { "Processor": "[Value]", "I/O Channels": "[Value]", "Interfaces": "[CAN / SPI / UART etc.]" },
      features: ["[Feature 1]", "[Feature 2]"],
      applications: ["[Application 1]", "[Application 2]"],
      datasheetUrl: "",
      faqs: []
    },
    {
      id: "PROD-005", name: "[Solar MPPT Charge Controller]", category: "Renewable Energy Technologies",
      price: "", availability: "Request a Quote", featured: false, dateAdded: "2025-12-15",
      image: "", gallery: [],
      shortDesc: "[Short product description — one or two lines]",
      description: "[Detailed product description — to be supplied.]",
      specs: { "PV Input": "[Value]", "Tracking Efficiency": "[Value]", "Battery Support": "[Chemistry types]" },
      features: ["[Feature 1]", "[Feature 2]"],
      applications: ["[Application 1]", "[Application 2]"],
      datasheetUrl: "",
      faqs: []
    },
    {
      id: "PROD-006", name: "[Battery Management Research Prototype]", category: "Research Prototypes",
      price: "", availability: "Request a Quote", featured: false, dateAdded: "2025-11-30",
      image: "", gallery: [],
      shortDesc: "[Short product description — one or two lines]",
      description: "[Detailed product description — to be supplied.]",
      specs: { "Cell Configuration": "[Value]", "Estimation Method": "[Value]", "Interface": "[Value]" },
      features: ["[Feature 1]", "[Feature 2]"],
      applications: ["[Application 1]", "[Application 2]"],
      datasheetUrl: "",
      faqs: []
    },
    {
      id: "PROD-007", name: "[Power Electronics Experimental Kit]", category: "Educational and Experimental Kits",
      price: "", availability: "Request a Quote", featured: true, dateAdded: "2026-01-12",
      image: "", gallery: [],
      shortDesc: "[Short product description — one or two lines]",
      description: "[Detailed product description — to be supplied. Describe the learning objectives and included components.]",
      specs: { "Included Modules": "[List]", "Suitable For": "[UG / PG lab]", "Power Requirement": "[Value]" },
      features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
      applications: ["[Application 1]", "[Application 2]"],
      datasheetUrl: "",
      faqs: [{ q: "[Sample FAQ question]", a: "[Answer — to be supplied]" }]
    },
    {
      id: "PROD-008", name: "[Customized Research Solution]", category: "Customized Research Solutions",
      price: "", availability: "Request a Quote", featured: false, dateAdded: "2025-11-10",
      image: "", gallery: [],
      shortDesc: "Custom-engineered solutions developed on enquiry for specific research or industrial requirements.",
      description: "The laboratory undertakes customized development for specific research, testing, or industrial requirements. Please contact us with your requirements for a tailored proposal.",
      specs: {},
      features: ["Tailored to your requirements", "Developed in consultation with our research team"],
      applications: ["[Application area — dependent on requirement]"],
      datasheetUrl: "",
      faqs: []
    }
  ],

  // ---------- Facilities preview ----------
  facilities: [
    { name: "[Instrument Name]", category: "Power Electronics Experimental Setups", image: "", desc: "[Brief technical description]" },
    { name: "[Instrument Name]", category: "Real-Time Digital Simulators", image: "", desc: "[Brief technical description]" },
    { name: "[Instrument Name]", category: "Power Quality Analyzers", image: "", desc: "[Brief technical description]" }
  ],

  // ---------- News (homepage preview) ----------
  news: [
    { title: "[Announcement Title]", date: "[Date]", category: "Publication", excerpt: "[Short excerpt]" },
    { title: "[Announcement Title]", date: "[Date]", category: "Achievement", excerpt: "[Short excerpt]" },
    { title: "[Announcement Title]", date: "[Date]", category: "Workshop", excerpt: "[Short excerpt]" }
  ]
};
