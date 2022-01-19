import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    // 监听基座下发的数据变化
    const dataListener = (data: any) => {
      const { type, data: receivedData } = data
      switch (type) {
        case 'micro-app-ng':
          console.log('**********')
          navigate(receivedData.path)
          return
      }
    }
    (window as any).microApp && (window as any).microApp.addGlobalDataListener(dataListener, true)
  }, [])
  
  return (
    <div className="App">
      microNg
    </div>
  );
}

export default App;
