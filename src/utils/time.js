export const getElapsedTime = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = endDate ? new Date(endDate).getTime() : Date.now();
  return end - start;
};

export const formatDuration = (ms) => {
  const totalMonths = Math.floor(ms / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);

  return parts.join(' ') || '0 months';
};
