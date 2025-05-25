import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="btn">
      {label}

      <style jsx>{`
        .btn {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }
        .btn:disabled {
          background-color: #aaa;
          cursor: not-allowed;
        }
        .btn:hover:not(:disabled) {
          background-color: #005bb5;
        }
      `}</style>
    </button>
  );
};

export default Button;
