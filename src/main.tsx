//import 'solid-devtools';
import './index.css'
import { createSignal, Component, JSXElement, For } from 'solid-js'
import { render } from 'solid-js/web'
import { A, Routes, Route, Router } from "@solidjs/router"
 import { Icon } from "solid-heroicons";
 import { bars_3, globeAlt} from "solid-heroicons/solid";
import { Editor } from './editor'


// bolt-slash for crossed out bolt icon. xMark X -> X icon, sun, moon
const Center: Component<{ children: JSXElement }> = (props) => {
  return <div class='flex flex-row'>
    <div class='flex-1' />
    <div>{props.children}</div>
    <div class='flex-1'></div>
  </div>
}

const Home = () => {
  // const [count, setCount] = createSignal(1)
  return <>
    <Center>

      <div>
       Welcome to the DataGrove file converter</div>
    </Center>
  </>
}
const About = () => {
  return <Center>
    <div class='m-2 p-2 rounded-md bg-white dark:bg-slate-900 text-black dark:text-white' >Descriptions, what is markdown, why use it, is the converter secure, etc.</div>
  </Center>
}
const Preview = () => {
  return  <div id='preview' class='m-2 p-2 rounded-md bg-white dark:bg-slate-900 text-black dark:text-white max-h-screen sm:max-h-screen' >
    <Editor/>
  
  </div>
}


function App() {
  return <>
    <nav>
      <A class='p-2 hover:text-blue-600 text-blue-700' href="/about">About</A>
      <A class='p-2 hover:text-blue-600 text-blue-700' href="/">Home</A>
      <A class='p-2 hover:text-blue-600 text-blue-700' href="/preview">Preview</A>
    </nav>

    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/preview" component={Preview} />
    </Routes>
  </>
}
//sideBar menu code
function SideBar2(){
  //const [mode,setMode] = createSignal(false)
  const [open, setOpen] = createSignal(false)
  //const [clicked, setClicked] = createSignal(false)
  const [items, setItems] = createSignal([
    {id: 'title', name: 'File Converter'},
    {id:'upload', name:'Upload File'},
    {id: 'download', name: 'Download file'}
     ]);
     //set to empty to hide contents of menu and load them onclick of menu button
     setItems([])
   return (
  <div class='flex'>

    <div class={`bg-white dark:bg-slate-600 text-black dark:text-white h-screen p-5 ${open() ? "w-72 bg-gray-200": "w-20 bg-white"} duration-300 absolute`}>
      
      <button onclick={()=>{

        console.log("Test for tech talk!")
        setOpen(!open())
        
        if (items().length>1) {
          setItems([])

        }else{
          setItems([
            {id: 'title', name: 'File Converter'},
            {id:'upload', name:'Upload File'},
            {id: 'download', name: 'Download file'}
             ])

        }
      }}>
      <Icon path={bars_3} style="width: 24px; color:black dark:color: white" />
      </button>
      <div>
        <For each={items()}>{(items)=>
        <ul class='p-2'>
          <li>
             {items.name}
          </li>
        </ul>
        }
        </For>
      </div>
    </div>
  </div>)
}
              

//Language toggle
const MultiLang = () => {
  const translate = function langs (){
    
    //let btnLang = document.querySelector('langs'),
    let link = document.querySelectorAll('a'),
      download = document.getElementById('download')!,
      upload = document.getElementById('upload')!,
     title = document.getElementById('title')!,
      convertBtn = document.getElementById('convertBtn')!;

    interface LanguageData {
      title: string;
      upload: string;
      download: string;
      convertBtn: string;
    }

    const data = new Map<string, LanguageData>();
    data.set(
      "spanish" , {
        title: 'Convertidor de Archivos',
        upload: 'Subir Archivo',
        download: 'Descargar Archivo',
        convertBtn: 'Selección de Archivo'
      }
    );
    data.set(
      "english", {
        title : 'File converter',
        upload: 'Upload file',
        download: 'Download File',
        convertBtn: 'Select file'

      });

    link.forEach(el => {
 
     el.addEventListener('click', ()=>{

       let attr: string = el.getAttribute('lang') ?? 'spanish';
     

       title.textContent = data.get(attr)?.title ?? 'File converter'
       convertBtn.textContent = data.get(attr)?.convertBtn ?? 'Convert file'
       upload.textContent = data.get(attr)?.upload ?? 'Upload file'
       download.textContent = data.get(attr)?.download ?? 'Download file'
      //  convertBtn.textContent = data.get(attr)?.convertBtn ?? 'Convert file'
     })
     
    });

  }  
  return(
    <div id='langs' class='absolute top-10 right-2'>

<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Languages</button>
<div id="dropdown" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
      <a class='p-2 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' id='btnLang' lang='english' onclick={translate}>ENG</a>
      </li>
      <li>
      <a class='pr-2 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' id='btnLang' lang='spanish' onclick={translate}>SPA</a>
      </li>
    </ul>
</div>

      {/* <label for="languages"> <Icon path={globeAlt} style="width: 24px; color:black dark:color: white" /></label>

      <select name="langs" id="langs">
        <option id='btnLang' value="en">
          <a class='p-2' id='btnLang' lang='english' onclick={translate}>ENG</a>  
        </option>
          
        <option id='btnLang' value="es" lang='spanish' onclick={translate}>Español</option>
      </select> */}
      
      {/* <a class='p-2' id='btnLang' lang='english' onclick={translate}>ENG</a>
      <a class='pr-2' id='btnLang' lang='spanish' onclick={translate}>SPA</a> */}
    </div>
    )
}


render (()=> <SideBar2 />, document.getElementById("sidebarMenu")! )
render (()=> <MultiLang />, document.getElementById("lang")! )
 render(() => <Router><App /></Router>, document.getElementById("app")!);