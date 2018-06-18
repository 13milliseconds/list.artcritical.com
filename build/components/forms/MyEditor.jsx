import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';


//let html = stateToHTML(contentState);
//let contentState = stateFromHTML(html);

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

export default class MyEditor extends React.Component {

    constructor(props) {
        super(props);
      }

      componentDidMount() {
        require("draft-js-inline-toolbar-plugin/lib/plugin.css")
    }
    
    render() {
        
        return ( 
            <div>
                <Editor 
                    editorState={this.props.editorState} 
                    onChange={this.props.onEditorChange} 
                    plugins={plugins}
                    ref={(element) => { this.editor = element; }}
                />
                <InlineToolbar />
            </div>
        )
    }
}