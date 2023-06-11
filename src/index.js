import ReactDOM from 'react-dom/client';
import { App3 } from './App3';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';
// import "./index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <AdminFlagProvider>
    <App3 />
  </AdminFlagProvider>
);
