// EmojiSelectField.tsx
import React, { useState } from 'react';
import { FieldType } from '@payloadcms/ui';
import './styles.scss';

type Props = FieldType<string> & {
  options: { label: string; value: string }[];
};

const baseClass = 'custom-emoji-field';

const EmojiSelectField: React.FC<Props> = ({ value, setValue, showError, errorMessage, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = ['field-type', baseClass, showError && 'error'].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={`${baseClass}__select`} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${baseClass}__value`}>{value || 'Select an emoji'}</span>
        <span className={`${baseClass}__arrow`}>▾</span>
      </div>

      {isOpen && (
        <ul className={`${baseClass}__options`}>
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                className={`${baseClass}__option ${value === opt.value ? 'selected' : ''}`}
                onClick={() => {
                  setValue(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      {showError && <p className={`${baseClass}__error`}>{errorMessage}</p>}
    </div>
  );
};

export default EmojiSelectField;
