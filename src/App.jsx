import { useEffect, useState } from "react";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
   window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault()
        setDeferredPrompt(e)

   })
  }, []);

  function handleInstall(){
    if (!deferredPrompt) return
    deferredPrompt.prompt()
  }

  return (
    <div>
      <h1>My React PWA 🚀</h1>
      {deferredPrompt && <button onClick={handleInstall}>Install App</button>}
    </div>
  );
}

export default App;
