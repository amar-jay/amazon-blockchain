import Image from 'next/image'
import React from 'react'
import { ConnectButton } from 'web3uikit'
const styles = {
    container: 'flex-initial h-full w-64 bg-[#fff] flex-col drop-shadow-sm hover:drop-shadow-md ease-out duration-300',
    profile: 'h-full w-full flex items-center justify-center',
    profilePicContainer: 'h-full w-full flex items-center justify-center',
    profilePic: 'h-full w-full'
}
function Sidebar() {
    const isLoggedIn=false
  return (
    <div
    className={styles.container}
    >
        <h1>Header</h1> 
        <div className={styles.profile}>
            
            {isLoggedIn ? (
                <div className={styles.profilePicContainer}>
                    <Image
                    alt="profile"
                    src="/vercel.svg"
                    className={styles.profilePic}
                    height={100}
                    width={100}
                    />
                </div>
            ) 
        : <ConnectButton />}
        </div>
    </div>
  )
}

export default Sidebar