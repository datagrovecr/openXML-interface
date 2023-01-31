const userTheme = localStorage.getItem("Theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const onIcon = document.querySelector("light");
const offIcon = document.querySelector("dark");
const iconToggle = () => {
    onIcon?.classList.toggle("invisible")
    offIcon?.classList.toggle("invisible")
}

const isDark = () => {
    if(userTheme==="dark"|| (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        offIcon?.classList.add("invisible")
    }
};

const themeSwitch = () =>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
        iconToggle()
    }
};