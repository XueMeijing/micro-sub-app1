import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Routes from './router/router'

import './_style/icon.less'

function App() {
  const navigate = useNavigate()
  const subLocation1 = useLocation()
  console.log('subLocation1', subLocation1)
  
  useEffect(() => {
    // 监听基座下发的数据变化
    const dataListener = (data: any) => {
      switch (data.type) {
        case 'switchTab':
          console.log('micro-sub-app1 switchTab')
          navigate(data.path)
          return
      }
    }
    (window as any).microApp && (window as any).microApp.addDataListener(dataListener, true)
  }, [])
  
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
