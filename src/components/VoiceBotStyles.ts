export const voiceBotStyles = `
  :host {
    all: initial;
    display: block;
    font-family: sans-serif;
  }
  .card {
    width: 350px;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    background-color: white;
  }
  .card-header {
    padding: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
  }
  .card-content {
    padding: 1.5rem;
  }
  .card-footer {
    padding: 1.5rem;
    border-top: 1px solid #e5e7eb;
  }
  .response-area {
    height: 150px;
    overflow-y: auto;
    background-color: #f3f4f6;
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
  .transcript-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .transcript {
    flex-grow: 1;
    background-color: #f3f4f6;
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .button-primary {
    background-color: #2563eb;
    color: white;
  }
  .button-primary:hover {
    background-color: #1d4ed8;
  }
  .button-outline {
    border: 1px solid #d1d5db;
    background-color: transparent;
  }
  .button-outline:hover {
    background-color: #f3f4f6;
  }
  .button-icon {
    padding: 0.5rem;
  }
  .w-full {
    width: 100%;
  }
`;
