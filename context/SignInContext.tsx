import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

type SignInContextType={
    userInfo:string,
    setUserInfo: (userInfo:string)=>void,
    isLoggedIn:boolean,
    setIsLoggedIn: (isLoggedIn:boolean)=>void
}

export const SignInContext = createContext<SignInContextType>({
    userInfo:'',
    setUserInfo: (userInfo:string)=>{console.log(userInfo)},
    isLoggedIn:false,
    setIsLoggedIn: (val)=>{console.log(val)}
})


export const SignInProvider:FC<PropsWithChildren> = ({children}) => {

    const [isLoggedIn, setIsLoggedIn]= useState(false)
    const [userInfo, setUserInfo]= useState('')
    // const handleSetIsLoggedIn = (val: boolean) => { setIsLoggedIn(val);  };
    // console.log('hello world')
    const defaultValue= {
        userInfo,
        setUserInfo,
        isLoggedIn,
        setIsLoggedIn,
    }
    // useEffect(() => {
    //     // console.log("useEffect Working in context")
        
    //   }, [userInfo,isLoggedIn])
  return (
    <SignInContext.Provider value={defaultValue}>
        {children}
    </SignInContext.Provider>
  )
}
