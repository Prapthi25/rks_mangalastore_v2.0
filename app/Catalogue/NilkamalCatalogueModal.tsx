"use client";

import { useEffect, useRef } from "react";
import NilkamalCataloguePage from "./NilkamalCataloguePage"; // adjust path to your catalogue file

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NilkamalCatalogueModal({ isOpen, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={overlayRef} className="catalogue-modal-root">
      {/* Close button — fixed so it's always visible */}
      <button
        className="catalogue-modal-close"
        onClick={onClose}
        aria-label="Close catalogue"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>Close</span>
      </button>

      {/* Catalogue page rendered inside the modal */}
      <div className="catalogue-modal-body">
        <NilkamalCataloguePage />
      </div>

      <style>{`
        .catalogue-modal-root {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: #0a0a0e;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: modalSlideIn 0.35s cubic-bezier(0.23, 1, 0.32, 1) both;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(32px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .catalogue-modal-close {
          position: fixed;
          top: 16px;
          right: 20px;
          z-index: 1100;
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(201, 169, 110, 0.12);
          border: 1px solid rgba(201, 169, 110, 0.35);
          color: #c9a96e;
          font-size: 13px;
          font-weight: 600;
          font-family: 'DM Sans', system-ui, sans-serif;
          padding: 8px 16px 8px 12px;
          border-radius: 100px;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
        }

        .catalogue-modal-close:hover {
          background: rgba(201, 169, 110, 0.22);
          border-color: rgba(201, 169, 110, 0.6);
          color: #f5d08a;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(201, 169, 110, 0.2);
        }

        .catalogue-modal-body {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          /* Hide the catalogue's own "← Back" nav link since we have our close button */
        }

        /* Override the catalogue's internal back button since we have our own close */
        .catalogue-modal-body .nav-back {
          display: none !important;
        }

        .catalogue-modal-body .nav-divider:first-of-type {
          display: none !important;
        }

        /* Scrollbar styling */
        .catalogue-modal-body::-webkit-scrollbar {
          width: 5px;
        }
        .catalogue-modal-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .catalogue-modal-body::-webkit-scrollbar-thumb {
          background: rgba(201, 169, 110, 0.2);
          border-radius: 3px;
        }
        .catalogue-modal-body::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 169, 110, 0.4);
        }
      `}</style>
    </div>
  );
}