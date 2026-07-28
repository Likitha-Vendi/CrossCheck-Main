const formatBadgeValue = (value) => {
  const normalized = String(value ?? '')
    .replaceAll('_', ' ')
    .trim();

  if (!normalized) return '';

  return normalized
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export const Badge = ({ value }) => {
  const label = formatBadgeValue(value);
  const className = String(value ?? '')
    .toLowerCase()
    .replaceAll('_', '-')
    .replaceAll(' ', '-');

  return <span className={`badge ${className}`}>{label}</span>;
};

export const Loader = () => (
  <div className="loader">
    <span />
    <p>Loading Secure Hiring Data…</p>
  </div>
);

export const Empty = ({ text = 'No Records Found' }) => (
  <div className="empty">{text}</div>
);

export const PageTitle = ({ title, subtitle, action }) => (
  <div className="page-title">
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    {action}
  </div>
);
