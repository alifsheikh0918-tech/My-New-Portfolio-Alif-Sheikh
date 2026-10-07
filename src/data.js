export const profile = {
  name: 'Alif Shiekh',
  firstName: 'Alif',
  role: 'Full Stack',
  roleAccent: 'Developer',
  github: 'https://github.com/alifsheikh0918-tech',
  linkedin: 'https://linkedin.com/',
  email: 'alifsheikh0918@gmail.com',
  photo: '/profile.jpg', // put your photo at public/profile.jpg
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const techBadges = ['⚛', 'TS', '⬡', 'ex', 'JS', 'N', '~', '🍃']

export const projects = [
  {
    title: 'E-Commerce Platform',
    heading: 'Shop Your Style',
    desc: 'A full-stack e-commerce web application featuring user authentication, product filtering, shopping cart functionality, and integrated online payment gateways.',
    tags: ['React', 'Nodejs', 'Tailwind CSS'],
    image: '/projects/ecommerce.png',
    from: 'from-[#0b0f1d]', via: 'via-[#102a6b]', to: 'to-[#1b4bd8]',
    github: '#', live: '#',
  },
  {
    title: 'Dev Stack',
    heading: 'Build Your Ideal Development Stack',
    desc: 'A productivity app for managing daily tasks and team projects. Includes drag-and-drop kanban boards, real-time updates, and progress analytics.',
    tags: ['React', 'Nodejs', 'Tailwind CSS'],
    image: '/projects/devstack.png',
    from: 'from-[#0a1a4a]', via: 'via-[#12307f]', to: 'to-[#2f6bff]',
    live: '#',
  },
  {
    title: 'Sereno Watch',
    heading: 'Luxury premium Watch Brand',
    desc: 'Discover Watches Crafted With precision.Premium Materials, And Design That Last A Lifetime',
    tags: ['React', 'Nodejs', 'Tailwind CSS'],
    image: '/projects/watch.png',
    from: 'from-[#05080f]', via: 'via-[#0b1b3f]', to: 'to-[#143a9e]',
    github: '#', live: '#',
  },
]
