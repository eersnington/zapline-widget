export const voiceBotStyles = `
.zap-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}

.zap-card-header {
  margin-bottom: 20px;
}

.zap-card-title {
  font-size: 24px;
  margin: 0;
  color: #333;
}

.zap-textarea {
  width: 100%;
  min-height: 100px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  resize: vertical;
}

.zap-spectogram {
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 20px;
}

.zap-spectogram-bar {
  width: 8px;
  background: #007aff;
  border-radius: 4px;
  transition: height 0.1s ease-in-out;
}

.zap-button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.zap-button-primary {
  background: #007aff;
  color: white;
}

.zap-button-primary:hover {
  background: #0056b3;
}

.zap-button-primary:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.zap-w-full {
  width: 100%;
}
`;
