import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('测试commit')
console.log('测试commit222, 有远程仓库')

createRoot(document.getElementById('root')!).render(
    <App />
)
