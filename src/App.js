
import React, {useState} from 'react';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import 'antd/dist/antd.css'; 
import { Layout } from 'antd';
import Navbar from './components/UI/navbar/Navbar';
const { Content } = Layout;

function App() {
  const [isAuth, setIsAuth] = useState(true);
  return ( 
  <Layout className="layout">
    <Navbar />
    <Content style={{ padding: '0 50px' }}>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <AppRouter />
      </AuthContext.Provider>
    </Content>
  </Layout>    
  );
}

export default App;