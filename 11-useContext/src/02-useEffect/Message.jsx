import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('Component mounted.');
    
      return () => {
        console.log('Component unmounted.');
      }
    }, []);
    
  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
