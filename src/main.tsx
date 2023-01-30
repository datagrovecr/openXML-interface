import './index.css'
import { createSignal, Component, JSXElement } from 'solid-js'
import { render } from 'solid-js/web'
import { A, Routes, Route, Router } from "@solidjs/router"
 import { Icon } from "solid-heroicons";
 import { bars_3 } from "solid-heroicons/solid";
import { Editor } from './editor'

// import * as outline from "solid-heroicons/outline";
// import * as solidMini from "solid-heroicons/solid-mini";
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
  //images/menuIcon.png
  return(
  <div class="flex">
  <button class="bg-zinc-900 text-white p-4 absolute top-0 left-0" id="toggle-sidebar" onclick={function() {
        document.getElementById("sidebar").classList.toggle("-translate-x-96");
      }}>
      <Icon path={bars_3} style="width: 24px; color: white" />

      {/* <img src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" alt="image" class='h-10'/>   */}
      </button>
  <div class="bg-zinc-900 text-white p-4  w-64" id="sidebar">
    <h1 class="text-2xl font-medium mb-4">File converter</h1>
    <ul>
      <li class="mb-2">
        <a href="#" class="block p-2 hover:bg-gray-800 rounded">Home</a>
      </li>
      <li class="mb-2">
        <a href="#" class="block p-2 hover:bg-gray-800 rounded">About</a>
      </li>
      <li class="mb-2">
        <a href="#" class="block p-2 hover:bg-gray-800 rounded">Services</a>
      </li>
      <li class="mb-2">
        <a href="#" class="block p-2 hover:bg-gray-800 rounded">Contact</a>
      </li>
    </ul>
  </div>
</div> );
}

render (()=> <SideBar />, document.getElementById("sidebarMenu")! )
render(() => <Router><App /></Router>, document.getElementById("app")!);
// render (()=> <SideBar />, document.getElementById("sidebarMenu")! )

