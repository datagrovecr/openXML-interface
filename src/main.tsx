import './index.css'
import { createSignal, Component, JSXElement } from 'solid-js'
import { render } from 'solid-js/web'
import { A, Routes, Route, Router } from "@solidjs/router"
import { Icon } from "solid-heroicons";import { Editor } from './editor'

const Center: Component<{ children: JSXElement }> = (props) => {
  return <div class='flex flex-row'>
    <div class='flex-1' />
    <div>{props.children}</div>
    <div class='flex-1'></div>
  </div>
}

const Home = () => {
  const [count, setCount] = createSignal(1)
  return <>
    <Center>

      <div><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count() + 1)}>+</button>  Counter: {count} Welcome to the DataGrove file converter</div>
    </Center>
  </>
}
const About = () => {
  return <Center>
    <div class='m-2 p-2 rounded-md bg-white text-black' >Descriptions, what is markdown, why use it, is the converter secure, etc.</div>
  </Center>
}
const EditorPage = () => {
  return  <div class='m-2 p-2 rounded-md bg-white dark:bg-black text-black dark:text-white max-h-screen sm:max-h-screen' ><Editor/></div>
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
  return(
    <div id="sidebarMenu" class="m-0 w-44 max-h-screen bg-white dark:bg-slate-800 text-black dark:text-white flex-col content-center ">
    <div id="sidebarTop">
      top 
    </div>
    <div id="sidebarMiddle">center</div>
    <div id="sidebarBottom">bottom</div>
    </div>
  );

  
}
render (()=> <SideBar />, document.getElementById("sidebarMenu")! )
render(() => <Router><App /></Router>, document.getElementById("app")!);
// render (()=> <SideBar />, document.getElementById("sidebarMenu")! )

