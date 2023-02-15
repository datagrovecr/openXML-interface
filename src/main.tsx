import './index.css'
import { createSignal, Component, JSXElement } from 'solid-js'
import { render } from 'solid-js/web'
import { A, Routes, Route, Router } from "@solidjs/router"
 import { Icon } from "solid-heroicons";
 import { bars_3, sun, moon} from "solid-heroicons/solid";
import { Editor } from './editor'
// bolt-slash for crossed out bolt icon. xMark X -> X icon
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
const EditorPage = () => {
  return  <div class='m-2 p-2 rounded-md bg-white dark:bg-slate-900 text-black dark:text-white max-h-screen sm:max-h-screen' >
    <Editor/>
  
  </div>
}


function App() {
  return <>
    <nav>
      <A class='p-2 hover:text-blue-600 text-blue-700' href="/about">About</A>
      <A class='p-2 hover:text-blue-600 text-blue-700' href="/">Home</A>
      <A class='p-2 hover:text-blue-600 text-blue-700' href="/editor">Editor</A>
    </nav>

    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/editor" component={EditorPage} />
    </Routes>
  </>
}
//sideBar menu code
function SideBar2(){
  const [mode,setMode] = createSignal(false)
  const [open, setOpen] = createSignal(false)
  // const [items, setItems] = createSignal([
  //   {id: 'title', name: 'File Converter'},
  //   {id:'upload', name:'Upload File'},
  //   {id: 'download', name: 'Download file'}
  //    ]);
  return (
  <div class='flex'>

    <div class={`bg-slate-300 dark:bg-slate-600 text-black dark:text-white h-screen p-5 ${open() ? "w-72": "w-20"} duration-300 absolute`}>
      
      <button onclick={()=>{
        setOpen(!open())
      }}>
      <Icon path={bars_3} style="width: 24px; color:black dark:color: white" />
      </button>
      <div>
        {/* <For each={items()}>{(items, i)=>
        <ul>
          <li>
            {i() +1}: {items.name}
          </li>
        </ul>
        }
        </For> */}
      </div>
    </div>
  </div>)
}
              

//Language toggle
const MultiLang = () => {
  const translate = function langs (){
    
    let btnLang = document.querySelector('langs'),
     link = document.querySelectorAll('a'),
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
       upload.textContent = data.get(attr)?.upload ?? 'Upload file'
       download.textContent = data.get(attr)?.download ?? 'Download file'
       convertBtn.textContent = data.get(attr)?.convertBtn ?? 'Convert file'
     })
     
    });

  }  
  return(
    <div id='langs' class='absolute top-0 right-0 text-black dark:text-white'>
      
      <a class='p-2' id='btnLang' lang='english' onclick={translate}>ENG</a>
      <a class='pr-2' id='btnLang' lang='spanish' onclick={translate}>SPA</a>
    </div>
    )
}


render (()=> <SideBar2 />, document.getElementById("sidebarMenu")! )
render (()=> <MultiLang />, document.getElementById("lang")! )
 render(() => <Router><App /></Router>, document.getElementById("app")!);