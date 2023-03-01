//import 'solid-devtools';
import './index.css'
import { createSignal, Component, JSXElement, For } from 'solid-js'
import { render } from 'solid-js/web'
import { A, Routes, Route, Router } from "@solidjs/router"
 import { Icon } from "solid-heroicons";
 import { bars_3} from "solid-heroicons/solid";
//import { Editor } from './editor'
import { Preview } from './editor';
/*const spanish = {  
  'title': 'Convertidor de Archivos',
'upload': 'Subir Archivo',
'download': 'Descargar Archivo'}
const english = {
  'title': 'File converter',
  'upload': 'Upload file',
  'download': 'Download File'}
const [lang, setLang] = createSignal<{[key:string]:string}>(spanish)*/

// bolt-slash for crossed out bolt icon. xMark X -> X icon, sun, moon
//globeAlt icon for translate dropdown
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
    <div class='m-2 p-2 rounded-md bg-white dark:bg-slate-900 text-black dark:text-white' ></div>
  </Center>
}
const Docpreview = () => {
  return  <div id='preview' class='m-2 p-2 rounded-md bg-white dark:bg-slate-900 text-black dark:text-white max-h-screen sm:max-h-screen' >
    <Preview />
  
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
      <Route path="/preview" component={Docpreview} />
    </Routes>
  </>
}
//sideBar menu code
function SideBar2(){
  //const [mode,setMode] = createSignal(false)
  const [open, setOpen] = createSignal(false)
  //const [clicked, setClicked] = createSignal(false)
  // const [items, setItems] = createSignal([
  //   {id: 'title', name: 'File Converter'},
  //   {id:'upload', name:'Upload File'},
  //   {id: 'download', name: 'Download file'}
  //    ]);
     //set to empty to hide contents of menu and load them onclick of menu button
     //setItems([])
     const items = () => ['title', 'upload','download'].map(e => lang()[e])
   return (
  <div class='flex'>

    <div class={`bg-white dark:bg-slate-600 text-black dark:text-white h-screen p-5 ${open() ? "w-72 bg-gray-200": "w-20 bg-white"} duration-300 absolute`}>
      <button onclick={()=>{
        setOpen(!open())
        
        // if (items().length>1) {
        //   setItems([])

        // }else{
        //   setItems([
        //     {id: 'title', name: 'File Converter'},
        //     {id:'upload', name:'Upload File'},
        //     {id: 'download', name: 'Download file'}
        //      ])

        }
      }>
      <Icon path={bars_3} style="width: 24px; color:black dark:color: white" />
      </button>
      <div>
        <For each={items()}>{(items)=>
        <ul class='p-2'>
          <li>
             {items}
          </li>
        </ul>
        }
        </For>
      </div>
    </div>
  </div>)
}
//File preview and document conversion
const Ui = () => {

  return <div class="text-black dark:text-white bg-gray-200 dark:bg-slate-900 font-mono rounded-lg m-2 p-4 container mx-auto px-10 max-w-max relative">
            <h1 id='title' class="p-2 font-mono text-3xl text-black dark:text-white dark:bg-slate-800 mx-auto container text-center sm:text-center sm:shrink-0">File converter</h1>
            <div id="inputs" class="text-white font-mono sm:">
              <div class="flex flex-row w-full m-2">
                <div class="flex-1"></div><label for="mdFile" id="convertBtn" class=" bg-green-600 hover:bg-green-700 text-white border font-bold py-2 px-4 rounded-full content-center space-x-4 space-y-4 cursor-pointer sm:shrink-0" >Select a File</label>
                <input id="mdFile" type="file" placeholder="Give me a docx file" accept=".docx" class='invisible' onchange={Preview}></input>
                <div class="flex-1"></div>
              </div>
              <div id='app'></div>
              </div>
      </div>
}             

//Language toggle
// const MultiLang = () => {
//   //const [open, setOpen] = createSignal(false)
//   const translate = function languages (){
    
//     //let btnLang = document.querySelector('langs'),
//     <For each={lang()}>{(languages)=>
//       <ul class='p-2'>
//         <li>
//            {languages}
//         </li>
//       </ul>
//       }
//       </For>
//     //   download = document.getElementById('download')!,
//     //   upload = document.getElementById('upload')!,
//     //  title = document.getElementById('title')!,
//     //   convertBtn = document.getElementById('convertBtn')!;

//     interface LanguageData {
//       title: string;
//       upload: string;
//       download: string;
//       convertBtn: string;
//     }

//     const data = new Map<string, LanguageData>();
//     data.set(
//       "spanish" , {
//         title: 'Convertidor de Archivos',
//         upload: 'Subir Archivo',
//         download: 'Descargar Archivo',
//         convertBtn: 'Selección de Archivo'
//       }
//     );
//     data.set(
//       "english", {
//         title : 'File converter',
//         upload: 'Upload file',
//         download: 'Download File',
//         convertBtn: 'Select file'

//       });

//     data.forEach(element => {
 
//      element.addEventListener('click', ()=>{

//        let attr: string = element.getAttribute('lang') ?? 'spanish';
        
//        setLang(attr=="english"?english:spanish)
     

//       //  title.textContent = data.get(attr)?.title ?? 'File converter'
//       //  convertBtn.textContent = data.get(attr)?.convertBtn ?? 'Convert file'
//       //  upload.textContent = data.get(attr)?.upload ?? 'Upload file'
//       //  download.textContent = data.get(attr)?.download ?? 'Download file'
//       //  convertBtn.textContent = data.get(attr)?.convertBtn ?? 'Convert file'
//      })
     
//     });

//   }  
//   return(
//     <div id='langs' class='absolute top-10 right-2'>

//       <button id="dropdownButton"  class="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Languages</button>
//       <div id="menu" class={`z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
//           <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
//             <li>
//               <a class='p-2 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' id='btnLang' lang='english' onclick={translate}>ENG</a>
//             </li>
//             <li>
//               <a class='pr-2 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' id='btnLang' lang='spanish' onclick={translate}>SPA</a>
//             </li>
//           </ul>
//       </div>
//     </div>
//     )
// }


render (()=> <SideBar2 />, document.getElementById("sidebarMenu")! )
//render (()=> <MultiLang />, document.getElementById("lang")! )
render (()=> <Ui />, document.getElementById("ui")! )
 render(() => <Router><App /></Router>, document.getElementById("app")!);