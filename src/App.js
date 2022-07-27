import {useState} from "react"
import './App.css';
import {lowercase,uppercase,numbers,special} from "./characters.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [password,setPassword]=useState('');
  const [passLength,setPasslength]=useState(10);
  const [IncludeUppercase,setIncludeuppercase]=useState(false);
  const [IncludeLowecase,setIncludelowercase]=useState(false);
  const [IncludeNumber,setIncludenumber]=useState(false);
  const [IncludeSymbol,setIncludesymbol]=useState(false);

  function notify(message){
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    }
  function copyToClipboard(){
   
    var textField = document.createElement('textarea')
    textField.innerText = password
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy');
    textField.remove();
    if(password.length===0)
    {
   // notify("Nothing to copy!");
   toast.error('Nothing to copy!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
    }
    else
    notify("Password Successfully copied to Clipboard!");
   
    }
  


 function generatepass()
  {
     if(!IncludeLowecase&&!IncludeUppercase&&!IncludeNumber&&!IncludeSymbol)
     {
        // notify("You must select atleast one option!");
        toast.warn('You must select atleast one option!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
     }
    let totalchar='';
     if(IncludeLowecase)
     totalchar=totalchar+lowercase;
     if(IncludeUppercase)
     totalchar=totalchar+uppercase;
     if(IncludeNumber)
     totalchar=totalchar+numbers;
     if(IncludeSymbol)
     totalchar=totalchar+special;
     
     let len=totalchar.length;
     let pass_str='';
     for(let i=0;i<passLength;i++)
     {
      let ran=Math.floor((Math.random()*len));
      pass_str=pass_str+totalchar.charAt(ran);
     }
     setPassword(pass_str);
  }

  return (
    <div className="app">
      <div className="pass-header">
     <h2 className="pass-gene-title">Password Generator</h2>
     </div>
    <div className="pass-title-and-btn">
      <h3 className='pass-title'>{password}</h3>
      <button className="btn-clipboard" onClick={copyToClipboard}><i className="far fa-clipboard"></i>
      </button>
      
    </div>
    <div className='extra'>
    <div className="password-length">
    <label for="pass-length">Password length</label>
    <input type ="number" defaultValue={passLength}  id="pass-length" name="pass-length" min="8" max="25" onChange={(element)=>{setPasslength(element.target.value)}}></input>
    </div>
     
    <div className="pass-upper">
    <label for="pass-uppercase">Include Uppercase Letter</label>
    <input type ="checkbox"  id="pass-uppercase" name="pass-uppercase"  onChange={(ele)=>{setIncludeuppercase(ele.target.checked) }}></input>
    </div>
    <div className="pass-lower">
    <label for="pass-lowercase">Include Lowercase Case</label>
    <input type ="checkbox"  id="pass-lowercase" name="pass-lowercase" onChange={(ele)=>{setIncludelowercase(ele.target.checked)}} ></input>
    </div>
    <div className="pass-num">
    <label for="pass-number">Include Number</label>
    <input type ="checkbox" checked={IncludeNumber} id="pass-number" name="pass-number" onChange={(ele)=>{setIncludenumber(ele.target.checked)}} ></input>
    </div>
    <div className="pass-sp">
    <label for="pass-special">Include Symbols</label>
    <input type ="checkbox" checked={IncludeSymbol}  id="pass-special" name="pass-special" onChange={(ele)=>{setIncludesymbol(ele.target.value)}} ></input>
    </div>
    <div className='gen-pass'>
      <button className='btn-gen-pass' onClick={generatepass}>Generate Password</button>
    </div>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
ToastContainer theme="dark" 
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
    </div>
  );
}

export default App;
