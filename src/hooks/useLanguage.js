export const useLanguage = (language) => {
  const colors = {
    'TypeScript': 'bg-[#3178c6]',
    'Ruby': 'bg-[#701516]',
    'JavaScript': 'bg-[#f1e05a]',
    'PHP': 'bg-[#4f5d95]',
    'HTML': 'bg-[#e34c26]',
    'C++': 'bg-[#f34b7d]',
    'Java': 'bg-[#b07219]',
    'CSS': 'bg-[#563d7c]',
    'SCSS': 'bg-[#c6538c]',
    'Python': 'bg-[#3572a5]',
    'Vue': 'bg-[#41b883]',
    'Angular': 'bg-[#dd1b16]',
    'React': 'bg-[#61dafb]',
    'Node.js': 'bg-[#68a063]',
    'Next.js': 'bg-[#000000]',
    'Sass': 'bg-[#c6538c]',
    'TailwindCSS': 'bg-[#38b2ac]',
    'Nuxt.js': 'bg-[#00c58e]',
    'Django': 'bg-[#092e20]',
    'Flask': 'bg-[#000000]',
    'Spring Boot': 'bg-[#6db33f]',
    'Laravel': 'bg-[#ff2d20]',
    'Ruby on Rails': 'bg-[#701516]',
    'MongoDB': 'bg-[#4db33d]',
    'PostgreSQL': 'bg-[#336791]',
  };

  return colors[language] || '';
}
