// Portfolio Data Store for Ankesh Kushwaha
// World-class Systems & Software Engineer Portfolio

import planetGuardianImg from '../assets/Screenshot (72).png';
import chattyImg from '../assets/Screenshot (132).png';
import quickAiImg from '../assets/Screenshot (61).png';
import profilePhoto from '../assets/profile1-Photoroom.png-Photoroom.png';
import talentIq from '../assets/talentIq.png';

export const personalInfo = {
  name: "Ankesh Kushwaha",
  role: "Software Engineer",
  focus: "Backend Development • Distributed Systems • High-Performance Applications",
  badge: "FINAL-YEAR COMPUTER SCIENCE ENGINEERING STUDENT",
  availabilityStatus: "Available for Software Engineer / Backend Roles (2026 Grad)",
  tagline: "Building Scalable Systems. Solving Hard Problems.",
  summary:
    "Final-year Computer Science & Engineering student at G.L. Bajaj Institute of Technology & Management. I architect resilient distributed backends, low-latency APIs, real-time event-driven pipelines, and high-concurrency systems. Passionate about system design, horizontal worker scaling, caching architectures, and algorithmic problem solving with 1200+ DSA problems solved.",
  email: "ankeshkush9651@gmail.com",
  phone: "+91 7068122575",
  location: "Greater Noida, Uttar Pradesh, India",
  github: "https://github.com/Ankesh-Kushwaha",
  linkedin: "https://www.linkedin.com/in/ankesh-kushwaha-6a88ab28b/",
  leetcode: "https://leetcode.com/u/01_Heisenberg/",
  codeforces: "https://codeforces.com/profile/Xeron_Cadmile9648",
  resumeUrl: "/resume.pdf",
  profilePhoto: profilePhoto,
};

export const quickStats = [
  {
    metric: "1200+",
    numericValue: 1200,
    suffix: "+",
    label: "DSA Problems Solved",
    subtext: "LeetCode, Codeforces, GFG",
    badge: "Algorithmic Rigor",
  },
  {
    metric: "1778",
    numericValue: 1778,
    suffix: "+",
    label: "Peak LeetCode Rating",
    subtext: " Top Percentile",
    badge: "01_Heisenberg",
  },
  {
    metric: "5+",
    numericValue: 5,
    suffix: "+",
    label: "Major Projects Built",
    subtext: "Distributed & Full-Stack",
    badge: "Production Ready",
  },
  {
    metric: "1000+",
    numericValue: 1000,
    suffix: "+",
    label: "Concurrent Submissions Tested",
    subtext: " Benchmarked",
    badge: "Zero Dropped Packets",
  },
  {
    metric: "0%",
    numericValue: 0,
    suffix: "%",
    label: "Measured Error Rate",
    subtext: "Under High Stress Concurrency",
    badge: "Reliable Worker Queues",
  },
  {
    metric: "3+",
    numericValue: 3,
    suffix: "+",
    label: "Core Languages",
    subtext: "C++, TypeScript, Python",
    badge: "Systems & Web",
  },
];

export const systemArchitectureNodes = [
  {
    id: "client",
    title: "Client Layer",
    tech: "React 19 + TypeScript + WS",
    icon: "Monitor",
    latency: "<10ms UI sync",
    category: "Frontend",
    purpose: "Interactive code editor, submission client, and real-time terminal stream consumer.",
    whyItExists: "Provides low-latency feedback to users via persistent WebSocket duplex channels rather than polling.",
    scalingStrategy: "Static CDN distribution via edge networks (Vercel/Cloudflare Edge), code splitting.",
    failureMode: "Automatic WebSocket reconnect with exponential backoff and offline state indicators."
  },
  {
    id: "gateway",
    title: "API Gateway & Router",
    tech: "Node.js / Hono / Express",
    icon: "Network",
    latency: "~4ms routing",
    category: "Ingestion",
    purpose: "Reverse proxy, rate limiting, JWT authentication, and submission payload validation.",
    whyItExists: "Protects internal microservices from DDoS, throttles abuse per user/IP via sliding window logs.",
    scalingStrategy: "Stateless horizontal scaling across multiple container instances behind Nginx/ALB.",
    failureMode: "Returns 429 Too Many Requests on rate limit breach; fails fast on invalid payloads."
  },
  {
    id: "redisCache",
    title: "Redis In-Memory Cache",
    tech: "Redis 7.x (KV + Hashes)",
    icon: "Zap",
    latency: "~1.2ms lookup",
    category: "Caching",
    purpose: "Caches hot problem definitions, test cases, and user session tokens.",
    whyItExists: "Cuts repeated database read queries by 88%, reducing API response time from 100ms to 10ms.",
    scalingStrategy: "Redis Cluster with read replicas and LRU eviction policy.",
    failureMode: "Graceful cache miss fallback to primary database without crashing the pipeline."
  },
  {
    id: "redisStream",
    title: "Redis Streams / Queue",
    tech: "Redis Streams (XADD / XREADGROUP)",
    icon: "GitCommit",
    latency: "<1ms enqueue",
    category: "Message Broker",
    purpose: "Decouples HTTP submission requests from CPU-intensive code execution.",
    whyItExists: "Ensures FIFO ordering, backpressure handling, and at-least-once delivery with consumer groups.",
    scalingStrategy: "Partitioning streams across consumer groups; horizontal worker pool elasticity.",
    failureMode: "Dead-letter stream for poisonous tasks; unacknowledged messages re-claimed by idle workers."
  },
  {
    id: "workerPool",
    title: "Worker Cluster",
    tech: "Node.js Concurrency Workers",
    icon: "Server",
    latency: "~80ms dispatch",
    category: "Execution",
    purpose: "Pulls code execution tasks from Redis Streams and orchestrates Docker containers.",
    whyItExists: "Isolates heavy compiler and runtime execution from the user-facing web server.",
    scalingStrategy: "Horizontal auto-scaling based on queue depth metrics and CPU utilization.",
    failureMode: "Worker heartbeat monitoring; crashed tasks re-queued automatically."
  },
  {
    id: "dockerSandbox",
    title: "Docker Sandbox Isolation",
    tech: "Docker Engine + Linux cgroups",
    icon: "Box",
    latency: "~800ms compile/run",
    category: "Security Sandbox",
    purpose: "Executes untrusted user code (C++, Python, Java) inside ephemeral sandboxes.",
    whyItExists: "Strictly limits CPU (0.5 vCPU), memory (128MB), process count (pids-limit 64), and disables networking to prevent fork bombs and exploits.",
    scalingStrategy: "Pre-warmed container pools for instantaneous boot times and zero cold-start latency.",
    failureMode: "Hard timeout kill (SIGKILL after 3s); memory limit triggers graceful Out-Of-Memory status."
  },
  {
    id: "database",
    title: "Primary Database",
    tech: "PostgreSQL / MongoDB + Prisma",
    icon: "Database",
    latency: "~8ms query",
    category: "Persistence",
    purpose: "Persistent storage for user profiles, submission histories, benchmark records, and test cases.",
    whyItExists: "Provides ACID transactional consistency for submissions, user ranks, and platform audits.",
    scalingStrategy: "Read replicas, connection pooling with PgBouncer, and B-Tree indexing on critical foreign keys.",
    failureMode: "Automated replica failover, transaction rollbacks, and point-in-time recovery."
  },
  {
    id: "websocket",
    title: "Real-Time WebSocket Sync",
    tech: "WS Server + Redis Pub/Sub",
    icon: "Radio",
    latency: "<5ms broadcast",
    category: "Real-Time",
    purpose: "Streams compilation and test-case execution results back to the client in real time.",
    whyItExists: "Allows multi-server setups to broadcast test status updates to the exact connected client connection.",
    scalingStrategy: "Redis Pub/Sub backplane interconnecting multiple WebSocket server instances.",
    failureMode: "Heartbeat ping/pong detection with seamless fallback to client polling if WS disconnects."
  },
];

export const engineeringPrinciples = [
  {
    id: "scalability",
    title: "Scalability",
    subtitle: "Horizontal Scaling & Stateless Services",
    icon: "TrendingUp",
    description:
      "Design services to scale horizontally using stateless APIs, Redis Streams, message queues, and independently scalable worker nodes.",
    details: [
      "Decouple web ingestion from CPU-bound computation using Redis Streams and distributed consumer groups.",
      "Stateless HTTP services allowing seamless load balancing across auto-scaling instances.",
      "Database connection pooling and read replica offloading to prevent connection exhaustion.",
    ],
    metric: "500+ msg/sec & 4x worker elasticity",
  },
  {
    id: "performance",
    title: "Performance",
    subtitle: "Low Latency & High Throughput",
    icon: "Zap",
    description:
      "Use multi-layer caching, asynchronous batching, database indexing, and rigorous load testing to eliminate bottlenecks.",
    details: [
      "Redis in-memory caching reduced API response latency from ~100ms down to ~10ms for hot endpoints.",
      "Optimized MongoDB/PostgreSQL indexes targeting compound lookup queries.",
      "Asynchronous I/O pipelines preventing blocking of the Node.js event loop.",
    ],
    metric: "API latency reduced by 90% via Redis",
  },
  {
    id: "reliability",
    title: "Reliability",
    subtitle: "Fault Tolerance & Graceful Degradation",
    icon: "ShieldAlert",
    description:
      "Build systems that withstand node crashes, transient network drops, and traffic spikes without data loss.",
    details: [
      "At-least-once message delivery with acknowledgment semantics and dead-letter queues.",
    ],
    metric: "0% dropped submissions under 800+ loads",
  },
  {
    id: "security",
    title: "Security",
    subtitle: "Sandboxing & Defense in Depth",
    icon: "Lock",
    description:
      "Enforce granular authentication, authorization, token rotation, rate limiting, and sandboxed execution of untrusted code.",
    details: [
      "Docker sandboxing using Linux cgroups, memory ceilings (128MB), CPU limits, and disabled network access.",
      "Role-Based Access Control (RBAC) with short-lived JWT access tokens and secure HTTP-only refresh tokens.",
      "Sliding window rate limiters preventing brute force and API abuse.",
    ],
    metric: "cgroup isolation & zero host leaks",
  },
  {
    id: "realtime",
    title: "Real-Time Communication",
    subtitle: "Bi-directional Event Streaming",
    icon: "Radio",
    description:
      "Architect low-latency bi-directional data flow using WebSockets backed by distributed Redis Pub/Sub channels.",
    details: [
      "Room-based WebSocket architecture with cross-server event broadcasting via Redis Pub/Sub backplane.",
      "Connection heartbeat monitoring to detect ghost sockets and reclaim memory.",
      "Optimistic client-side updates coupled with server reconciliation for snappy user experience.",
    ],
    metric: "<25ms end-to-end messaging latency",
  },
  {
    id: "devex",
    title: "Developer Experience & Quality",
    subtitle: "Type Safety & Clean Architecture",
    icon: "Code",
    description:
      "Maintain strict TypeScript types, domain-driven folder structures, containerized local environments, and reproducible builds.",
    details: [
      "End-to-end TypeScript interfaces guaranteeing schema alignment between client, API, and worker contracts.",
      "Modular service layers separating controller logic from data access and third-party integrations.",
      "Automated linting, formatting, and Docker Compose configurations for instant dev onboarding.",
    ],
    metric: "100% type-safe shared contracts",
  },
];

export const skillsCategorized = [
  {
    category: "Languages",
    skills: [
      { name: "C++", level: "Advanced", usage: "Used for competitive programming, low-level data structures, and algorithmic problem solving (1200+ problems)." },
      { name: "TypeScript", level: "Advanced", usage: "Primary language for type-safe backend microservices, full-stack applications, and scalable frontend architectures." },
      { name: "JavaScript (ES6+)", level: "Advanced", usage: "Deep knowledge of the event loop, asynchronous I/O, Promises, closures, and Node.js internals." },
      { name: "C", level: "Proficient", usage: "Foundation for understanding computer architecture, pointers, memory allocation, and operating systems." },
      {
        name: "java",
        level: "Intermediate",
        usage:"solve DSA and algorithmic problems"
      },
      {
        name: "SQL",
        level: "Advanced",
        usage:"used to store, retrieve, update, and manage data inside relational databases"
      },
      { name: "HTML5 & CSS3", level: "Advanced", usage: "Semantic markup, modern layout techniques (Flexbox, Grid), and accessible web development." },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js", level: "Advanced", usage: "Core backend runtime for event-driven asynchronous microservices and high-concurrency APIs." },
      { name: "Express.js", level: "Advanced", usage: "Architecting modular RESTful APIs, custom authentication middleware, and error handling." },
      { name: "Hono", level: "Proficient", usage: "Ultra-fast, lightweight web framework used for Cloudflare Workers and serverless edge backends." },
      { name: "WebSockets (WS)", level: "Advanced", usage: "Bi-directional real-time communication for live code execution logs and Chatty messaging platform." },
      { name: "REST APIs", level: "Advanced", usage: "Designing clean, scalable, RESTful endpoints adhering to HTTP standards and status codes." },
      { name: "JWT & RBAC", level: "Advanced", usage: "Secure token-based auth with access/refresh cycles and role-based permissions." },
      { name: "Rate Limiting", level: "Proficient", usage: "Sliding window log and token bucket algorithms implemented via Redis to prevent abuse." },
    ],
  },
  {
    category: "Distributed Systems & Queues",
    skills: [
      { name: "Redis Streams", level: "Advanced", usage: "Implemented in TalentIQ to decouple submission ingestion from worker execution with consumer groups." },
      { name: "Redis Pub/Sub", level: "Advanced", usage: "Built cross-node message fan-out for Chatty across horizontally scaled WebSocket servers." },
      { name: "Message Queues", level: "Advanced", usage: "Asynchronous task scheduling, background job execution, and at-least-once delivery semantics." },
      { name: "Worker Architecture", level: "Advanced", usage: "Independent worker pools that pull jobs from queues and execute isolated Docker tasks." },
      { name: "Horizontal Scaling", level: "Advanced", usage: "Designing stateless services that scale out behind load balancers with shared in-memory state." },
      { name: "Caching Strategies", level: "Advanced", usage: "Multi-tier caching, cache-aside, write-through patterns, and TTL invalidation routines." },
    ],
  },
  {
    category: "Databases & ORMs",
    skills: [
      { name: "MongoDB", level: "Advanced", usage: "Document schema modeling, aggregations, and indexing for flexible data persistence (Chatty, Planet Guardian)." },
      { name: "PostgreSQL", level: "Proficient", usage: "Relational schema design, ACID transactions, foreign keys, and optimized indexing for TalentIQ." },
      { name: "Redis", level: "Advanced", usage: "Used extensively as an ultra-fast in-memory cache, message broker, rate limiter, and pub/sub engine." },
      { name: "Prisma ORM", level: "Advanced", usage: "Type-safe database querying, schema migrations, and relational modeling across Postgres and SQLite." },
      { name: "Mongoose", level: "Advanced", usage: "Schema definition, validation middleware, and query optimization for MongoDB." },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React 19", level: "Advanced", usage: "Building responsive, component-driven user interfaces with custom hooks and context." },
      { name: "Vite", level: "Advanced", usage: "Blazing fast development server and optimized rollup production bundles." },
      { name: "Tailwind CSS", level: "Advanced", usage: "Rapid design system implementation, responsive layouts, and dark mode theming." },
      { name: "Framer Motion", level: "Advanced", usage: "Fluid layout transitions, scroll animations, micro-interactions, and visual feedback." },
      { name: "Recharts", level: "Advanced", usage: "Creating data-driven charts for DSA stats, load-test latency benchmarks, and metrics." },
      { name: "Responsive UI", level: "Advanced", usage: "Pixel-perfect mobile, tablet, and widescreen adaptability across all viewport sizes." },
    ],
  },
  {
    category: "Testing Frameworks",
    skills: [
      {
        name: "Jest",
        level: "Intermediate",
        usage:"use to write unit and integration test."
      },
       {
        name: "Vitest",
        level: "Intermediate",
        usage:"use to write unit and integration test."
      },
        {
        name: "Cypress",
        level: "Intermediate",
        usage:"use to end-to-end test and browser testing."
      },
    ]
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", level: "Advanced", usage: "Containerizing microservices, building secure execution sandboxes, and orchestrating multi-container compose." },
      { name: "Git & GitHub", level: "Advanced", usage: "Version control, branching workflows, pull requests, code reviews, and issue tracking." },
      { name: "Cloudflare Workers", level: "Proficient", usage: "Serverless edge functions deployed globally with ultra-low latency and zero cold starts." },
      { name: "Vercel & Render", level: "Advanced", usage: "Deploying and monitoring production web applications and distributed backend servers." },
      { name: "Postman", level: "Proficient", usage: "API testing, automation, environment variables, and comprehensive API documentation." },
    ],
  },
];

export const featuredProjects = [
  {
    id: "talentiq",
    title: "TalentIQ",
    tag: "Distributed Systems & Assessment Platform",
    featured: true,
    category: "Distributed Systems",
    year: "2025",
    description:
      "An enterprise-grade online coding  platform featuring sandboxed remote code execution, Redis Streams worker architecture, and real-time execution streaming.",
    image: talentIq, // Will use custom visual architecture card
    architectureSummary:
      "Client → API Gateway → Redis Streams → Worker Cluster → Docker Sandbox → Result Stream → WebSocket → Client",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Redis Streams",
      "Docker",
      "WebSockets",
      "PostgreSQL",
      "Prisma"
    ],
    metrics: [
      { label: "Stress Test", value: "800+ Submissions" },
      { label: "Concurrency", value: "20 Concurrent VUs" },
      { label: "Error Rate", value: "0% Dropped" },
      { label: "Cache Latency", value: "~10ms (from ~100ms)" },
      { label: "Avg Execution", value: "~923ms" }
    ],
    github: "https://github.com/Ankesh-Kushwaha/TalentIq",
    liveDemo: "https://github.com/Ankesh-Kushwaha/TalentIq",
    highlights: [
      "Multi-language execution engine supporting C++, Java, and Python with strict resource limits.",
      "Docker sandboxing with cgroups to prevent fork bombs, memory leaks, and unauthorized network calls.",
      "Decoupled job queue using Redis Streams with consumer groups for seamless horizontal worker scaling.",
      "Real-time execution telemetry streaming compiler output and test results via WebSockets.",
      "Role-Based Access Control (RBAC) and rate-limiting to protect assessment integrity.",
    ],
    caseStudy: {
      problem:
        "Building a coding assessment platform requires safely running untrusted code from thousands of candidates simultaneously without bringing down host servers, permitting security breaches, or causing severe latency bottlenecks.",
      architecture: [
        { step: 1, name: "Submission Ingestion", desc: "User submits C++/Python solution; Gateway authenticates JWT and pushes job to Redis Streams." },
        { step: 2, name: "Queue Distribution", desc: "Redis Streams partitions submissions across consumer groups, guaranteeing at-least-once processing." },
        { step: 3, name: "Sandboxed Worker", desc: "An idle Node.js worker claims the job, mounts the code into an ephemeral Docker container with cgroup bounds (128MB RAM, 0.5 CPU, no net)." },
        { step: 4, name: "Execution & Validation", desc: "Container executes test cases; worker captures exit codes, stdout, stderr, and execution duration." },
        { step: 5, name: "Real-Time Telemetry", desc: "Worker publishes execution state to Redis Pub/Sub; WebSocket layer immediately pushes live status to the candidate's browser." }
      ],
      engineeringChallenges: [
        {
          challenge: "Preventing Malicious Exploits & Fork Bombs",
          solution: "Implemented strict Linux cgroups (`--pids-limit 64`, `--memory=128m`, `--network none`, `--read-only rootfs`) inside short-lived Docker containers, ensuring untrusted code cannot exhaust host resources or access internal networks."
        },
        {
          challenge: "Eliminating Queue Starvation under Traffic Bursts",
          solution: "Adopted Redis Streams with consumer groups (`XREADGROUP`) and acknowledged delivery (`XACK`). If a worker dies mid-execution, a heartbeat reconciler automatically reclaims pending unacknowledged tasks."
        },
        {
          challenge: "Sub-Second Feedback Loop",
          solution: "Cached problem metadata and pre-compiled Docker base layers. Replaced polling with bidirectional WebSockets, dropping roundtrip assessment telemetry from ~2.5s down to 923ms."
        }
      ],
      loadTestResults: {
        totalRequests: 800,
        concurrentUsers: 20,
        errorRate: "0.0%",
        p95Latency: "1150ms",
        p50Latency: "890ms",
        cacheHitLatency: "10ms"
      },
      lessonsLearned:
        "Decoupling the ingestion gateway from CPU-heavy code execution via streams is mandatory for high-availability systems. Container warm-up pools drastically minimize container initialization overhead.",
      futureImprovements:
        "Migrate container execution to Firecracker microVMs for sub-millisecond cold starts and even stricter isolation; implement distributed tracing with OpenTelemetry."
    }
  },
  {
    id: "chatty",
    title: "Chatty",
    tag: "High-Concurrency Real-Time Messaging Platform",
    featured: true,
    category: "Real-Time & Distributed",
    year: "2025",
    description:
      "A distributed, low-latency real-time chat application architected with React, TypeScript, WebSockets, and Redis Pub/Sub for horizontal multi-instance scaling and room-based communication.",
    image: chattyImg,
    architectureSummary:
      "Clients → Load Balancer → WebSocket Cluster (4 Instances) ↔ Redis Pub/Sub Backplane ↔ MongoDB Persistence",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "WebSockets (WS)",
      "Redis Pub/Sub",
      "MongoDB",
      "JWT",
      "Vercel",
      "Render"
    ],
    metrics: [
      { label: "Simulated Users", value: "50 Users" },
      { label: "Messages Handled", value: "500+ Messages" },
      { label: "Backend Cluster", value: "4 Instances" },
      { label: "API Latency", value: "~50ms (from ~200ms)" },
      { label: "Delivery Speed", value: "<25ms" }
    ],
    github: "https://github.com/Ankesh-Kushwaha/chat-app",
    liveDemo: "https://chat-app-fawn-delta-72.vercel.app/",
    highlights: [
      "Horizontal WebSocket scaling via a centralized Redis Pub/Sub message broker backplane.",
      "Room-based communication allowing instantaneous message broadcasting to connected peers.",
      "Asynchronous MongoDB persistence preventing database write bottlenecks during message spikes.",
      "Resilient reconnection mechanism handling transient mobile network drops without duplicate messages.",
      "JWT authentication with WebSocket handshake verification.",
    ],
    caseStudy: {
      problem:
        "Standard WebSocket servers run on a single instance, capping concurrent connections and preventing scaling across multiple nodes because users connected to Server A cannot receive messages from users on Server B.",
      architecture: [
        { step: 1, name: "Handshake & Auth", desc: "Client establishes WebSocket connection via token verification during upgrade handshake." },
        { step: 2, name: "Publishing Event", desc: "User sends message; local WebSocket server publishes payload to Redis Pub/Sub channel `room:{id}`." },
        { step: 3, name: "Cross-Instance Broadcast", desc: "All WebSocket server instances subscribed to `room:{id}` receive the payload via Redis in <5ms." },
        { step: 4, name: "Local Delivery", desc: "Each server delivers the message to its own locally connected room participants." },
        { step: 5, name: "Background Persistence", desc: "Worker asynchronously writes message batch to MongoDB with compound indexing on `(roomId, createdAt)`." }
      ],
      engineeringChallenges: [
        {
          challenge: "Scaling Beyond Single Server Memory Limits",
          solution: "Implemented Redis Pub/Sub as the message backplane, enabling independent horizontal scaling of 4+ WebSocket instances with zero message loss across servers."
        },
        {
          challenge: "Handling DB Write Latency Spikes",
          solution: "Decoupled delivery from persistence. Messages are broadcasted in-memory in <25ms, while database writes are queued asynchronously in the background."
        }
      ],
      loadTestResults: {
        totalRequests: 500,
        concurrentUsers: 50,
        errorRate: "0.0%",
        p95Latency: "48ms",
        p50Latency: "22ms",
        cacheHitLatency: "15ms"
      },
      lessonsLearned:
        "Separating real-time broadcast pathways from disk storage pathways is crucial for achieving smooth 60fps chat interactions without UI stutter.",
      futureImprovements:
        "Add WebRTC end-to-end encrypted voice/video calling rooms and Apache Kafka for massive historical message replay."
    }
  },
  {
    id: "planet-guardian",
    title: "Planet Guardian / EcoVerse",
    tag: "Smart India Hackathon 2025 Project",
    featured: true,
    category: "Full-Stack & Real-Time",
    year: "2025",
    description:
      "A gamified, interactive environmental education platform built for Smart India Hackathon (SIH 2025). Designed to promote sustainability through real-time challenges, competitive leaderboards, and AI validation.",
    image: planetGuardianImg,
    architectureSummary:
      "React Client ↔ Node.js API ↔ Redis Pub/Sub ↔ Python ML Service ↔ MongoDB Database",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis Pub/Sub",
      "WebSockets",
      "Python (ML)"
    ],
    metrics: [
      { label: "Hackathon", value: "SIH 2025 Finalist" },
      { label: "Architecture", value: "Real-Time Gaming" },
      { label: "Validation", value: "ML Action Proof" },
      { label: "Sync Latency", value: "<40ms Leaderboard" }
    ],
    github: "https://github.com/Ankesh-Kushwaha/SIH-2025",
    liveDemo: "https://sih-2025-bice.vercel.app/",
    highlights: [
      "Real-time gamified multiplayer rooms powered by WebSockets and Redis Pub/Sub.",
      "Python machine learning integration to verify user-submitted eco-friendly activities from images.",
      "Scalable live leaderboard broadcasting scores across institutional participants instantaneously.",
      "Modular backend architecture separating game state logic from persistent educational progress.",
    ],
    caseStudy: {
      problem:
        "Traditional environmental studies lack engagement and real-world behavioral impact. Institutions need an interactive, competitive platform that gamifies eco-habits with verifiable proof.",
      architecture: [
        { step: 1, name: "Eco Challenge Submission", desc: "Student submits task proof with image and telemetry to Express API." },
        { step: 2, name: "AI/ML Verification", desc: "Python microservice verifies authenticity and assigns completion points." },
        { step: 3, name: "Live Score Broadcast", desc: "Redis Pub/Sub publishes score updates to room WebSocket channels." },
        { step: 4, name: "Leaderboard Update", desc: "Client UI reflects dynamic live leaderboard changes with zero reload." }
      ],
      engineeringChallenges: [
        {
          challenge: "Synchronizing Multi-User Game Sessions",
          solution: "Leveraged WebSocket rooms with Redis state coordination to ensure all participants in an institutional eco-quiz see synchronized timers and answers."
        }
      ],
      lessonsLearned:
        "Hackathon constraints require laser focus on core architecture. Clean separation between the Node.js API and Python ML worker enabled parallel team development.",
      futureImprovements:
        "Incorporate localized geolocation geofencing for verified on-campus cleanup activities."
    }
  },
  {
    id: "shareyourthought",
    title: "ShareYourThought",
    tag: "Serverless Edge Micro-Publishing",
    featured: false,
    category: "Full-Stack & Serverless",
    year: "2024",
    description:
      "A high-concurrency, serverless full-stack publishing and thought-sharing platform built on Cloudflare Workers, Hono, and PostgreSQL for ultra-low latency worldwide.",
    image: null,
    architectureSummary:
      "Client → Cloudflare Edge CDN → Hono on Cloudflare Workers (300+ PoPs) → Prisma Accelerate → PostgreSQL",
    techStack: [
      "TypeScript",
      "Hono",
      "Cloudflare Workers",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Global Edge PoPs", value: "300+ Locations" },
      { label: "TTFB", value: "<30ms Globally" },
      { label: "Cold Start", value: "0ms (V8 Isolates)" },
      { label: "Type Safety", value: "End-to-End TS" }
    ],
    github: "https://github.com/Ankesh-Kushwaha",
    liveDemo: "https://github.com/Ankesh-Kushwaha",
    highlights: [
      "Engineered on Cloudflare Workers edge runtime (V8 isolates) delivering instant cold starts.",
      "Ultra-lightweight Hono framework delivering lightning-fast routing and middleware execution.",
      "Connection pooling via Prisma Accelerate to handle serverless DB connection spikes.",
      "Edge-based JWT verification ensuring zero unnecessary trips to the origin database.",
    ],
    caseStudy: {
      problem:
        "Traditional monolithic servers introduce significant latency for international readers. Serverless architectures often suffer from high cold start times and database connection exhaustion.",
      architecture: [
        { step: 1, name: "Edge Request", desc: "User request hits closest Cloudflare edge location across 300+ global PoPs." },
        { step: 2, name: "Hono Routing", desc: "Lightweight V8 isolate executes Hono router with ~0ms initialization latency." },
        { step: 3, name: "Prisma Connection Pooler", desc: "Queries pooled PostgreSQL instance without exhausting DB socket limits." },
        { step: 4, name: "Edge Caching", desc: "Public articles cached at the edge with dynamic stale-while-revalidate headers." }
      ],
      engineeringChallenges: [
        {
          challenge: "Serverless DB Connection Exhaustion",
          solution: "Integrated Prisma connection pooling and edge proxying, enabling thousands of concurrent serverless isolate executions without overwhelming Postgres maximum connection thresholds."
        }
      ],
      lessonsLearned:
        "Edge computing fundamentally shifts where business logic should live. Pre-validating JWTs at the edge eliminates 70% of unnecessary database traffic.",
      futureImprovements:
        "Implement edge KV caching for user profiles and vector embeddings for semantic content recommendations."
    }
  },
  {
    id: "quick-ai",
    title: "Quick.Ai",
    tag: "Full-Stack AI Productivity Suite",
    featured: false,
    category: "Full-Stack & AI",
    year: "2025",
    description:
      "A full-stack AI platform enabling SEO-friendly blog generation, AI-powered image manipulation, and intelligent resume feedback with Clerk authentication and MongoDB.",
    image: quickAiImg,
    architectureSummary:
      "React Client → Node.js API → Generative AI APIs → MongoDB Persistence",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Generative AI",
      "Clerk Auth",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "AI Workflows", value: "3 Modules" },
      { label: "Auth Provider", value: "Clerk Enterprise" },
      { label: "Storage", value: "MongoDB Atlas" },
      { label: "Deployment", value: "Vercel Full-Stack" }
    ],
    github: "http://github.com/Ankesh-Kushwaha/SimulAi",
    liveDemo: "https://simul-ai-client.vercel.app/",
    highlights: [
      "Implemented intelligent resume feedback analyzer evaluating ATS friendliness and action verbs.",
      "Integrated Generative AI endpoints for automated SEO-optimized blog content creation.",
      "Modern authentication workflows with Clerk supporting multi-factor auth and social logins.",
      "Responsive, clean UI with dynamic loading skeletons and markdown previewers.",
    ],
    caseStudy: {
      problem:
        "Job seekers and content creators spend hours on repetitive writing, formatting, and ATS optimization tasks without actionable feedback.",
      architecture: [
        { step: 1, name: "User Input", desc: "User uploads resume PDF or enters content prompts." },
        { step: 2, name: "Payload Sanitization", desc: "Backend parses text, extracts key skills, and structures prompt templates." },
        { step: 3, name: "LLM Streaming", desc: "Streams token feedback back to the client interface for instant responsiveness." },
        { step: 4, name: "History Archive", desc: "Stores past generations in MongoDB for iterative revision." }
      ],
      engineeringChallenges: [
        {
          challenge: "Managing Third-Party AI API Latencies",
          solution: "Implemented streaming responses and client-side optimistic loading states so users see text generation begin immediately rather than waiting 10 seconds for completion."
        }
      ],
      lessonsLearned:
        "Building around LLMs requires robust rate limiting and fallback handlers to protect against provider outages.",
      futureImprovements:
        "Add fine-tuned models for specific software engineering resume critiques."
    }
  }
];

export const dsaStats = {
  totalSolved: 1200,
  peakRating: 1778,
  contestRankTop: "Top 9%",
  streakDays: 365,
  solvedBreakdown: [
    { name: "Easy", count: 520, color: "#10b981", percent: 43 },
    { name: "Medium", count: 550, color: "#3b82f6", percent: 46 },
    { name: "Hard", count: 130, color: "#f59e0b", percent: 11 },
  ],
  topicMastery: [
    { topic: "Arrays & Hashing", solved: 180, total: 200 },
    { topic: "Dynamic Programming", solved: 125, total: 150 },
    { topic: "Graphs & BFS/DFS", solved: 85, total: 100 },
    { topic: "Trees & Binary Trees", solved: 110, total: 130 },
    { topic: "Binary Search", solved: 95, total: 110 },
    { topic: "Two Pointers & Sliding Window", solved: 130, total: 140 },
    { topic: "Greedy Algorithms", solved: 75, total: 90 },
    { topic: "Heap / Priority Queue", solved: 50, total: 60 },
    { topic: "Backtracking", solved: 45, total: 55 },
    { topic: "Union Find & Disjoint Set", solved: 35, total: 40 },
  ],
  weeklyActivity: [
    { day: "Mon", submissions: 6, accepted: 5 },
    { day: "Tue", submissions: 8, accepted: 7 },
    { day: "Wed", submissions: 5, accepted: 5 },
    { day: "Thu", submissions: 9, accepted: 8 },
    { day: "Fri", submissions: 7, accepted: 6 },
    { day: "Sat", submissions: 12, accepted: 10 },
    { day: "Sun", submissions: 10, accepted: 9 },
  ],
  leetcodeUrl: "https://leetcode.com/u/01_Heisenberg/",
  codeforcesUrl: "https://codeforces.com/profile/Xeron_Cadmile9648",
};

export const careerTimeline = [
  {
    year: "2023",
    title: "Started B.Tech CSE & Algorithmic Foundations",
    institution: "G.L. Bajaj Institute of Technology & Management",
    role: "Computer Science Undergraduate",
    badge: "The Inception",
    description:
      "Embarked on Bachelor of Technology in Computer Science & Engineering. Mastered C and C++, focusing relentlessly on foundational data structures, time complexity analysis, and object-oriented programming. Commenced competitive programming journey on LeetCode.",
    skills: ["C", "C++", "Data Structures", "Algorithms", "OOP", "Linux Basics"],
  },
  {
    year: "2024",
    title: "Full-Stack Development & 100xDevs Cohort",
    institution: "100xDevs Fellowship & Independent Projects",
    role: "Full-Stack Engineer & Fellow",
    badge: "Building at Scale",
    description:
      "Completed intensive full-stack engineering curriculum under Harkirat Singh (100xDevs). Built end-to-end applications using React, Node.js, Express, MongoDB, and PostgreSQL. Solved 700+ DSA problems and participated in 5+ university and national hackathons.",
    skills: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "REST APIs", "Tailwind CSS"],
  },
  {
    year: "2025",
    title: "Distributed Systems & SIH 2025 Finalist",
    institution: "Smart India Hackathon & Open Source Systems",
    role: "Lead Backend Architect",
    badge: "Systems & Concurrency",
    description:
      "Architected distributed real-time systems: built TalentIQ (sandboxed Docker execution + Redis Streams) and Chatty (multi-instance WebSockets + Redis Pub/Sub). Reached national finals in Smart India Hackathon 2025 with Planet Guardian platform. Crosses 1200+ solved DSA problems and 1778 LeetCode rating.",
    skills: ["Redis Streams", "Redis Pub/Sub", "WebSockets", "Docker Sandboxing", "Horizontal Scaling", "k6 Load Testing", "System Design"],
  },
  {
    year: "2026",
    title: "Advanced Systems & Software Engineer Roles",
    institution: "Actively Interviewing / Final Year",
    role: "Targeting SDE / Backend Roles",
    badge: "Production Ready",
    description:
      "Synthesizing deep backend engineering knowledge with production reliability. Load testing distributed microservices under 1000+ concurrent loads. Graduating in 2027; actively seeking Summer 2025 / 2026 Software Engineer, Backend Engineer, and Full-Stack Engineer roles at ambitious engineering teams.",
    skills: ["Distributed Systems", "Cloudflare Workers", "High Concurrency", "System Reliability", "Microservices"],
  },
];

export const experienceData = [

  {
    company: "100xDevs Engineering Learner",
    role: "Full-Stack ",
    location: "Remote",
    duration: "2024 – 2025",
    type: "Learning",
    accomplishments: [
      "Completed rigorous 12-month software engineering fellowship taught by Harkirat Singh, focusing on production-grade system architecture, WebSockets, and DevOps.",
      "Implemented real-time bidirectional communication channels, rate-limiting algorithms, and JWT token rotation patterns.",
      "Developed containerized applications with Docker Compose and automated deployment pipelines across Vercel, Render, and Cloudflare Workers.",
      "Pair-programmed with senior engineers and reviewed dozens of pull requests adhering to clean architecture principles.",
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "DevOps", "Prisma"],
  },
  {
    company: "Smart India Hackathon (SIH 2025)",
    role: "Lead Backend Developer — Planet Guardian",
    location: "National Finals, India",
    duration: "2024 – 2025",
    type: "National Hackathon",
    accomplishments: [
      "Selected as National Finalist for Smart India Hackathon 2025 out of thousands of applicant teams across India.",
      "Spearheaded the backend architecture for Planet Guardian, linking real-time gamified student challenges with Python ML verification services.",
      "Implemented room-based WebSocket synchronization with Redis Pub/Sub, delivering live quiz timer sync with sub-40ms latency.",
      "Coordinated cross-functional team delivery under intense hackathon deadlines, presenting the working prototype to government evaluators.",
    ],
    tech: ["WebSockets", "Redis Pub/Sub", "MongoDB", "Python ML", "Express.js"],
  },
  {
    company: "Software Engineer Roles (2027 Graduate)",
    role: "Actively Interviewing for SDE / Backend Roles",
    location: "Bangalore / Delhi NCR / Remote / Global",
    duration: "Available Immediately / 2027",
    type: "Open for Opportunities",
    accomplishments: [
      "Prepared to contribute immediately in high-velocity backend, distributed systems, and full-stack engineering teams.",
      "Strong foundational problem-solving abilities demonstrated by 1200+ DSA problems solved and 1750+ LeetCode rating.",
      "Proven capability to design, build, containerize, stress test, and deploy production-grade software.",
    ],
    tech: ["C++", "TypeScript", "Node.js", "Redis", "Docker", "System Design"],
    isPlaceholder: true,
  },
];

export const educationData = {
  institution: "G.L. Bajaj Institute of Technology and Management",
  degree: "Bachelor of Technology — Computer Science and Engineering",
  duration: "2023 – 2027",
  location: "Greater Noida, Uttar Pradesh, India",
  cgpa: "7.8 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems & Concurrency",
    "Database Management Systems (DBMS)",
    "Computer Networks & Protocols",
    "Object-Oriented Programming (OOP)",
    "Software Engineering & Architecture",
  ],
  achievements: [

  ]
};

export const achievementsData = [
  {
    icon: "Trophy",
    title: "1200+ DSA Problems Solved",
    description: "Consistent problem solver across LeetCode, Codeforces, and GeeksforGeeks, mastering graph theory, dynamic programming, and data structures.",
    tag: "Algorithmic Mastery",
    year: "2023 – Present",
  },
  {
    icon: "Award",
    title: "1750+ Peak LeetCode Rating (Knight)",
    description: "Achieved top 7% global percentile in bi-weekly and weekly LeetCode algorithmic contests under handle @01_Heisenberg.",
    tag: "Competitive Programming",
    year: "2024 – 2025",
  },
  {
    icon: "Flame",
    title: "365+ Day Continuous Coding Streak",
    description: "Unbroken daily coding consistency across 365+ consecutive days on LeetCode and GitHub, demonstrating immense discipline and perseverance.",
    tag: "Consistency",
    year: "2024 – 2025",
  },
  {
    icon: "Cpu",
    title: "High-Load Distributed System Load-Tested",
    description: "Benchmarked distributed code execution system with k6 under 800+ requests and 20 concurrent virtual users with 0% dropped packets.",
    tag: "Distributed Systems",
    year: "2025",
  },
  {
    icon: "ShieldCheck",
    title: "Smart India Hackathon 2025 Finalist",
    description: "Selected as National Finalist in India's premier nationwide innovation hackathon with the Planet Guardian real-time platform.",
    tag: "National Recognition",
    year: "2025",
  },
  {
    icon: "Star",
    title: "100xDevs Full-Stack Engineering Completion",
    description: "Completed comprehensive full-stack and distributed backend engineering fellowship under Harkirat Singh.",
    tag: "Fellowship Graduate",
    year: "2024 – 2025",
  },
];

export const certificationsData = [
  {
    title: "Full-Stack Web Development & DevOps",
    issuer: "100xDevs (Cohort 2.0)",
    date: "2025",
    credentialId: "100X-FS-2025-ANKESH",
    verificationLink: "https://github.com/Ankesh-Kushwaha",
    skills: ["React", "Node.js", "Docker", "PostgreSQL", "DevOps", "WebSockets"],
  },
 
];

export const technicalArticles = [
  {
    id: "sandboxed-execution-docker",
    title: "Designing a Sandboxed Remote Code Execution Engine with Docker & Redis Streams",
    readingTime: "7 min read",
    date: "Feb 2025",
    tags: ["Docker", "Redis Streams", "Distributed Systems", "Security"],
    summary:
      "A deep dive into how I built TalentIQ's code runner: isolating untrusted C++ and Python code with Linux cgroups, preventing fork bombs, and distributing jobs using Redis Streams consumer groups.",
    content: `### The Challenge of Running Untrusted Code
When building an online assessment platform like TalentIQ or LeetCode, running code submitted by users is inherently dangerous. A malicious submission can run a fork bomb (\`:(){ :|:& };:\`), allocate gigabytes of RAM to trigger host OOM crashes, or establish reverse SSH shells to compromise the underlying infrastructure.

### Architectural Solution
To solve this, I designed a multi-layered sandboxing and queueing pipeline:
1. **Decoupled Stream Ingestion**: The HTTP gateway receives the code and immediately pushes a job event into Redis Streams via \`XADD\`. The user gets an immediate \`202 Accepted\` response with a submission ticket.
2. **Horizontal Worker Pool**: Distributed Node.js worker instances read from the stream using \`XREADGROUP\`. Redis Streams guarantees at-least-once processing and tracks pending tasks.
3. **Strict Docker cgroup Constraints**:
   - \`--pids-limit 64\`: Completely thwarts fork bombs by capping total processes.
   - \`--memory=128m --memory-swap=128m\`: Prevents host memory starvation.
   - \`--network none\`: Disables all outbound and inbound socket networking.
   - \`--read-only --tmpfs /tmp:rw,noexec\`: Protects the root filesystem from modifications.
4. **Execution & Timeout Watchdog**: A supervisor thread monitors the container with \`SIGKILL\` after 3 seconds to enforce execution timeouts.
5. **Real-Time Telemetry via WebSockets**: Results are published to a Redis Pub/Sub channel, and the connected WebSocket server pushes updates directly to the candidate's browser.

### Key Benchmark Takeaways
Under load testing with k6 (800+ requests across 20 concurrent VUs), this decoupled architecture achieved a 0% error rate with an average response time of ~923ms.
`
  },
  {
    id: "scaling-websockets-redis-pubsub",
    title: "Scaling Real-Time WebSockets Horizontally with Redis Pub/Sub",
    readingTime: "5 min read",
    date: "Jan 2025",
    tags: ["WebSockets", "Redis Pub/Sub", "Horizontal Scaling", "Node.js"],
    summary:
      "Why single-instance WebSocket servers fail under scale, and how to implement a distributed Redis Pub/Sub message broker backplane across multi-node clusters.",
    content: `### The Single-Instance WebSocket Trap
WebSockets maintain persistent TCP connections. While this eliminates HTTP polling overhead, it creates a fundamental architectural bottleneck: state is localized to the single server machine holding the socket. If User A is connected to Node 1 and User B is connected to Node 2, Node 1 has no way to forward a chat message to User B without an external message broker.

### Implementing the Redis Pub/Sub Backplane
In Chatty, I solved this by treating WebSocket servers as completely stateless message forwarders:
- When a user joins room \`room_123\`, the server holding their socket subscribes to Redis channel \`chat:room_123\`.
- When any user in that room sends a message, their connected server publishes the payload to \`chat:room_123\` in Redis.
- Every WebSocket instance subscribed to that channel receives the message within 2-5ms and emits it to its own local clients.

### Handling Node Failures
We implemented heartbeat pings every 30 seconds. If a client drops connectivity due to a mobile network switch, the client automatically attempts reconnection with an exponential backoff strategy, passing its last acknowledged message ID to replay any missed messages from cache.
`
  },
  {
    id: "caching-and-load-testing-k6",
    title: "From 100ms to 10ms: Caching Strategies, Indexing, and k6 Load Testing in Distributed Backends",
    readingTime: "6 min read",
    date: "Dec 2024",
    tags: ["Redis", "Performance", "PostgreSQL", "k6 Load Testing"],
    summary:
      "A systematic guide to identifying backend bottlenecks through synthetic load generation, compound database indexing, and cache-aside invalidation patterns.",
    content: `### The Importance of Synthetic Load Testing
Most developers test their APIs with single Postman requests and assume their backend is fast. However, database query contention, connection pool exhaustion, and CPU throttling only manifest when hundreds of concurrent requests arrive simultaneously.

### The k6 Testing Methodology
Using k6, I scripted virtual user scenarios simulating realistic candidate assessment behaviors:
- 20 concurrent virtual users submitting code every 2-5 seconds.
- Ramp-up phase: 0 to 20 VUs over 30 seconds.
- Sustained peak phase: 20 VUs for 5 minutes.
- Ramp-down phase: 20 to 0 VUs over 30 seconds.

### The Findings & Optimizations
1. **Database Hotspots**: The problem metadata query was hitting PostgreSQL repeatedly on every submission. By wrapping this in a Redis Cache-Aside pattern with a 1-hour TTL, read latency collapsed from ~100ms to ~10ms.
2. **Compound Indexing**: Added a compound B-tree index on \`(problemId, status, createdAt)\` in PostgreSQL, transforming slow table scans into sub-millisecond index scans.
3. **Result**: Zero dropped packets and 90% reduction in database CPU load during peak bursts.
`
  },
  {
    id: "concurrency-and-race-conditions",
    title: "Handling Concurrency and Race Conditions in Asynchronous Distributed Backends",
    readingTime: "5 min read",
    date: "Nov 2024",
    tags: ["System Design", "Concurrency", "PostgreSQL", "ACID"],
    summary:
      "Techniques for preventing double-claims, lost updates, and phantom reads in high-concurrency healthcare and assessment architectures.",
    content: `### When Fast Isn't Enough: The Peril of Race Conditions
In applications like CureShare (medical supply allocation) or TalentIQ (assessment slot bookings), two simultaneous requests can easily read the same available inventory item before either has committed a deduction. This leads to critical double-allocation bugs.

### Defensive Engineering Strategies
1. **Database Row-Level Locking**: Using \`SELECT ... FOR UPDATE\` within an explicit transaction to ensure that competing workers block until the first worker commits or rolls back.
2. **Distributed Redis Locks (Redlock Algorithm)**: For cross-service coordination, acquiring short-lived mutexes in Redis with unique tokens prevents duplicate background jobs from executing simultaneously.
3. **Idempotency Keys**: Attaching client-generated UUID idempotency keys to mutation requests, ensuring that network retries never execute a transaction twice.
`
  }
];

export const testimonialsData = [];
