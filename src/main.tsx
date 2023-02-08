import './index.css'
import { createSignal, Component, JSXElement } from 'solid-js'
import { render } from 'solid-js/web'
import { A, Routes, Route, Router } from "@solidjs/router"
 import { Icon } from "solid-heroicons";
 import { bars_3, sun, moon} from "solid-heroicons/solid";
import { Editor } from './editor'
// bolt-slash for crossed out bolt icon
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
  return  <div class='m-2 p-2 rounded-md bg-white dark:bg-slate-900 text-black dark:text-white max-h-screen sm:max-h-screen' ><Editor/></div>
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
  return(
  <div class="flex">
  <button class="bg-white dark:bg-zinc-900 text-black dark:text-white p-4 absolute top-0 left-0" onclick={function() {
        const menu = document.getElementById("sidebar");
        menu?.classList.toggle("invisible");
      }}>
      <Icon path={bars_3} style="width: 24px; color:black dark:color: white" />

      </button>
  <div class="bg-white dark:bg-black text-black dark:text-white p-4  w-full h-full sm:shrink-0" id="sidebar">
    <h1 class="text-2xl font-medium mb-4 ml-10">file Converter</h1>
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
      </button>
      </li>
    </ul>
  </div>
</div> );
}
// const MultiLang = () => {
//   return(
//     <div id='langs' class='absolute top-0 right-0 text-black dark:text-white'>
      
//       <a href="#" lang='english'>ENG</a>
//       <a href="#" lang='spanish'>SPA</a>
//     </div>
//    ); function langs (){
//      let btnLang = document.querySelector('langs'),
//      link = document.querySelectorAll('a'),
//      download = document.getElementById('download')!,
//      upload = document.getElementById('upload')!,
//      title = document.getElementById('title')!,
//      convertBtn = document.getElementById('convertBtn')!;
//      let data = {
//       spanish : {
//         title: 'Convertidor de Archivos',
//         upload: 'Subir Archivo',
//         download: 'Descargar Archivo',
//         convertBtn: 'Convertir Archivo'
//       },
//       english : {
//         title : 'File converter',
//         upload: 'Upload file',
//         download: 'Download File',
//         convertBtn: 'Convert file'
//       }
//      }
//      link.forEach(el => {
//       el.addEventListener('click', ()=>{
//         let attr = el.getAttribute('lang')
//         title.textContent = data[attr].title
//         upload.textContent = data[attr].upload
//         download.textContent = data[attr].download
//         convertBtn.textContent = data[attr].convertBtn
//       },
      
//     });
//     }

//    )

// }
render (()=> <MultiLang />, document.getElementById("lang")! )
render (()=> <SideBar />, document.getElementById("sidebarMenu")! )

render(() => <Router><App /></Router>, document.getElementById("app")!);
