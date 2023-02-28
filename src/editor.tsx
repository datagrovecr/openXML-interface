import { Component , onMount} from 'solid-js'
import { EditorState } from "@codemirror/state"
import { EditorView, keymap } from "@codemirror/view"
import { defaultKeymap } from "@codemirror/commands"
import { markdown } from "@codemirror/lang-markdown"
import {
    highlightSpecialChars, drawSelection, highlightActiveLine, dropCursor,
    rectangularSelection, crosshairCursor,
    lineNumbers, highlightActiveLineGutter
} from "@codemirror/view"
import { Extension } from "@codemirror/state"
import {
    defaultHighlightStyle, syntaxHighlighting, indentOnInput, bracketMatching,
    foldGutter, foldKeymap
} from "@codemirror/language"
import { history, historyKeymap } from "@codemirror/commands"
import { searchKeymap, highlightSelectionMatches } from "@codemirror/search"
import { autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete"
import { lintKeymap } from "@codemirror/lint"
import { createSignal, Show} from 'solid-js'
//import {languages} from "@codemirror/language-data"


export const basicSetup: Extension = (() => [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    foldGutter(),
    drawSelection(),
    dropCursor(),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
    bracketMatching(),
    closeBrackets(),
    autocompletion(),
    rectangularSelection(),
    crosshairCursor(),
    highlightActiveLine(),
    highlightSelectionMatches(),
    keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...completionKeymap,
        ...lintKeymap
    ])
])()

/// A minimal set of extensions to create a functional editor. Only
/// includes [the default keymap](#commands.defaultKeymap), [undo
/// history](#commands.history), [special character
/// highlighting](#view.highlightSpecialChars), [custom selection
/// drawing](#view.drawSelection), and [default highlight
/// style](#language.defaultHighlightStyle).
export const minimalSetup: Extension = (() => [
    highlightSpecialChars(),
    history(),
    drawSelection(),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
    keymap.of([
        ...defaultKeymap,
        ...historyKeymap,
    ])
])()

let startState = EditorState.create({
    doc: "View your document",
    extensions: [
        basicSetup,
        markdown(),
        keymap.of(defaultKeymap),
    ]
})
//startState contains info doc: is the placeholder
// Using document changes and view.dispatch

 const [view, setView] = createSignal<EditorView|null>(null)
export const Editor : Component<{ setView: (v:EditorView)=> void }> = () => {
    let div : HTMLDivElement 
    onMount(()=>{
        setView(new EditorView({
            state: startState, 
            parent: div,
        })) 
    })


    return <div ref={div!}/>
}
export const Preview:Component<{}> = () =>{
    //const [view, setView] = createSignal<EditorView|null>(null)

    return <div>
            <Editor setView = {setView} />
            <Show when={view()}>
            <button onclick={()=>view()?.dispatch({})}></button>
            </Show>

        </div>
}
