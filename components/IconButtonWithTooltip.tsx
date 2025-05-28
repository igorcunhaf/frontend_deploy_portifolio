import { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

interface IconButtonWithTooltipProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
  as?: 'button' | 'link';
  href?: string;
}

export default function IconButtonWithTooltip({
  icon,
  label,
  onClick,
  className = '',
  as = 'button',
  href,
}: IconButtonWithTooltipProps) {
  const id = `tooltip-${label.replace(/\s+/g, '-')}`;

  if (as === 'link' && href) {
    return (
      <a
        href={href}
        data-tooltip-id={id}
        data-tooltip-content={label}
        className={`p-2 rounded-full hover:bg-gray-100 transition text-inherit ${className}`}
      >
        {icon}
        <Tooltip id={id} />
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      data-tooltip-id={id}
      data-tooltip-content={label}
      className={`p-2 rounded-full hover:bg-gray-100 transition text-inherit ${className}`}
    >
      {icon}
      <Tooltip id={id} />
    </button>
  );
}
