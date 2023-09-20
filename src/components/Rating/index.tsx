'use client';
import { Rating as RatingUI } from '@mui/material';

type Rating = {
  className?: string;
  hiddenLabel?: boolean;
  label?: string;
  inputName?: string;
  readOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
  value: number;
  onChange?: (event: React.SyntheticEvent, value: number | null) => void;
};

export const Rating = ({
  className,
  hiddenLabel = false,
  label = 'Rating',
  inputName = 'rating',
  readOnly = false,
  size = 'medium',
  value,
  onChange,
}: Rating) => {
  return (
    <>
      <span
        className={
          hiddenLabel === true
            ? 'sr-only'
            : 'text-cyan-700 text-xs font-normal lg:text-sm'
        }
      >
        {label}
      </span>
      <RatingUI
        className={className}
        name={inputName}
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e, value);
          }
        }}
        precision={0.5}
        readOnly={readOnly}
        size={size}
      />
    </>
  );
};
