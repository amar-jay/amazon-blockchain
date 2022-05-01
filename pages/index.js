// import Head from 'next/head'


import Sidebar from "../components/Sidebar"
import Main from "../components/Main"

// import Image from 'next/image'
const styles = {
  container: 'h-screen w-full flex bg-[#fff] flex-row',
  header: 'h-full w-full flex items-center justify-center'
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Main />
    
    </div>
  )
}
