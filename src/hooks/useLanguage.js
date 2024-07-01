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
  };

  return colors[language] || '';
}
