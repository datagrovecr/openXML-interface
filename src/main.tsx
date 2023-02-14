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
function SideBar(){
  const [mode,setMode] = createSignal(false)
  return  <div class='flex-1'>
    
    <div class="flex-1">
  <button class="bg-white dark:bg-zinc-900 text-black dark:text-white p-4 absolute top-0 left-0" onclick={function() {
        const menu = document.getElementById("sidebar");
        const header = document.getElementById('appheader');
        menu?.classList.toggle("invisible")
        header?.classList.toggle("invisible")
      }}>
      <Icon path={bars_3} style="width: 24px; color:black dark:color: white" />

      </button>
  <div class="bg-white dark:bg-black text-black dark:text-white p-4  w-full h-full" id="sidebar">
    <h1 class=' mb-4 ml-10 invisible'>this is empty space</h1>
    <ul class='absolute bg-slate-300 rounded dark:bg-slate-700'>
      <li class="mb-2">
        <a id='upload' href="#" class="block p-2 hover:bg-slate-200 dark:hover:bg-slate-500 rounded">Upload File</a>
      </li>
      <li class="mb-2">
        <a id='download' href="#" class="block p-2 hover:bg-slate-200 dark:hover:bg-slate-500 rounded">Download File</a>
      </li>
      <li>
      <button onclick={
        function(){
        setMode(!mode())
        const userTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if(userTheme==="dark"|| (!userTheme && systemTheme)){
          document.documentElement.classList.add("dark");
          themeToggle();
          return;
      }else{
        themeToggle();
      }
      function themeToggle(){
        if(document.documentElement.classList.contains("dark")){
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          return;
      }else{
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme","dark");
      }
      }
      }}>
        <Icon path={mode()?sun:moon} id="light" style="width: 24px; color:black dark:color: white hover:bg-slate-500" />
        </  button>
        </li>
      </ul>
    </div>
  </div> 
      <div id='title2' class='flex-1 p-6 absolute top-0 left-12'>
        File converter
      </div>
</div> 
}function SideBar2(){
  const [mode,setMode] = createSignal(false)
  return <div class="w-full h-full absolute top-0 left-0">
      <div class="flex flex-no-wrap">
          {/* <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] --> */}
          <div style="min-height: 716px" class="w-64 absolute sm:relative bg-slate-400 dark:bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
              <div class="px-8">
                  <div class="h-16 w-full flex items-center">
                    <h1 id='menuTitle' class='text-white font-bold'>File converter</h1>
                  </div>
                  <ul class="mt-12">
                      <li class="flex w-full justify-between text-black cursor-pointer items-center mb-6">
                          <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                              <span class="text-sm ml-2 dark:text-white">Download File</span>
                          </a>
                          {/* <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"></div> */}
                      </li>
                      <li class="flex w-full justify-between text-black dark:text-white dark:hover:text-gray-300 cursor-pointer items-center mb-6">
                          <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                              <span class="text-sm ml-2">Upload File</span>
                          </a>
                          {/* <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">8</div> */}
                      </li>
                      <li class="flex w-full justify-between text-black dark:text-white dark:hover:text-gray-300 cursor-pointer items-center mb-6">
                      <button onclick={
        function(){
        setMode(!mode())
        const userTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if(userTheme==="dark"|| (!userTheme && systemTheme)){
          document.documentElement.classList.add("dark");
          themeToggle();
          return;
      }else{
        themeToggle();
      }
      function themeToggle(){
        if(document.documentElement.classList.contains("dark")){
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          return;
      }else{
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme","dark");
      }
      }
      }}>
        <Icon path={mode()?sun:moon} id="light" style="width: 24px; color:black dark:color: white hover:bg-slate-500" />
        </  button>
                      </li>
                      <li class="flex w-full justify-between text-black dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer items-center mb-6">
                          <a href="javascript:void(0)" class="flex items-center dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-white" >
                              <span class="text-sm ml-2">Deliverables</span>
                          </a>
                      </li>
                      <li class="flex w-full justify-between text-black dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer items-center mb-6">
                          <a href="javascript:void(0)" class="flex items-center dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-white">
                              <span class="text-sm ml-2">Invoices</span>
                          </a>
                      </li>
                      <li class="flex w-full justify-between text-black dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer items-center mb-6">
                          <a href="javascript:void(0)" class="flex items-center focus:outline-none dark:focus:ring-2 dark:focus:ring-white">
                              <span class="text-sm ml-2">Inventory</span>
                          </a>
                      </li>
                      <li class="flex w-full justify-between text-black dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer items-center">
                          <a href="#" class="flex items-center focus:outline-none dark:focus:ring-2 dark:focus:ring-white">
                              <span class="text-sm ml-2">Settings</span>
                          </a>
                      </li>
                  </ul>
                  <div class="flex justify-center mt-48 mb-4 w-full">
                      <div class="relative">
                          <div class="text-black dark:text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <circle cx="10" cy="10" r="7"></circle>
                                  <line x1="21" y1="21" x2="15" y2="15"></line>
                              </svg>
                          </div>
                          <input class="dark:bg-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-black placeholder-gray-400 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
                      </div>
                  </div>
              </div>

          </div>
          <div class="w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out" id="mobile-nav">
              <button aria-label="toggle sidebar" id="openSideBar" class="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800" onclick="sidebarHandler(true)">
                  <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="6" cy="10" r="2" />
                      <line x1="6" y1="4" x2="6" y2="8" />
                      <line x1="6" y1="12" x2="6" y2="20" />
                      <circle cx="12" cy="16" r="2" />
                      <line x1="12" y1="4" x2="12" y2="14" />
                      <line x1="12" y1="18" x2="12" y2="20" />
                      <circle cx="18" cy="7" r="2" />
                      <line x1="18" y1="4" x2="18" y2="5" />
                      <line x1="18" y1="9" x2="18" y2="20" />
                  </svg>
              </button>
              <button aria-label="Close sidebar" id="closeSideBar" class="hidden h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white" onclick="sidebarHandler(false)">
                  <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
              </button>

                  <ul class="mt-12">
                      <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                          <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                              </svg>
                              <span class="text-sm ml-2">Products</span>
                          </a>
                          <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">8</div>
                      </li>
                      <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                        <a>
                        </a>
                      </li>
                      <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                          <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <polyline points="7 8 3 12 7 16"></polyline>
                                  <polyline points="17 8 21 12 17 16"></polyline>
                                  <line x1="14" y1="4" x2="10" y2="20"></line>
                              </svg>
                              <span class="text-sm ml-2">Deliverables</span>
                          </a>
                      </li>
                      <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                          <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                              </svg>
                              <span class="text-sm ml-2">Invoices</span>
                          </a>
                          <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">25</div>
                      </li>
                      <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                          <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                  <polyline points="4 12 12 16 20 12" />
                                  <polyline points="4 16 12 20 20 16" />
                              </svg>
                              <span class="text-sm ml-2">Inventory</span>
                          </a>
                      </li>
                      <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
                          <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <circle cx="12" cy="12" r="3" />
                              </svg>
                              <span class="text-sm ml-2">Settings</span>
                          </a>
                      </li>
                  </ul>
                  <div class="flex justify-center mt-48 mb-4 w-full">
                      <div class="relative">
                          <div class="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <circle cx="10" cy="10" r="7"></circle>
                                  <line x1="21" y1="21" x2="15" y2="15"></line>
                              </svg>
                          </div>
                          <input class="dark:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-gray-100  rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
                      </div>
                  </div>
              </div>
  </div>
  {/* End of menu */}

</div>
//</div>                
}

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