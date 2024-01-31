import ReactDOM from 'react-dom/client'

export const createSafeRoot = (elementId) => {
  const root = document.getElementById(elementId)

  return ReactDOM.createRoot(root)
}