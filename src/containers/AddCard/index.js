import React from 'react'
import './style.css';

export default function AddCard() {
    return (
        <div id="container">
            <fieldset>
                <button className="fontStyle italic" onClick="document.execCommand('italic',false,null);"
                        title="Italicize Highlighted Text"></button>
                <button className="fontStyle bold" onClick="document.execCommand( 'bold',false,null);"
                        title="Bold Highlighted Text"></button>
                <button className="fontStyle underline"
                        onClick="document.execCommand( 'underline',false,null);"></button>
                <select id="input-font" className="input" onChange="changeFont (this);">
                    <option value="Arial">Arial</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Sans serif">Sans serif</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Palatino">Palatino</option>
                    <option value="Garamond">Garamond</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                    <option value="Arial Black">Arial Black</option>
                    <option value="Tahoma">Tahoma</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                </select>
                <button className="fontStyle strikethrough"
                        onClick="document.execCommand( 'strikethrough',false,null);">
                    <strikethrough></strikethrough>
                </button>
                <button className="fontStyle align-left" onClick="document.execCommand( 'justifyLeft',false,null);">
                    <justifyLeft></justifyLeft>
                </button>
                <button className="fontStyle align-center" onClick="document.execCommand( 'justifyCenter',false,null);">
                    <justifyCenter></justifyCenter>
                </button>
                <button className="fontStyle align-right" onClick="document.execCommand( 'justifyRight',false,null);">
                    <justifyRight></justifyRight>
                </button>
                <button className="fontStyle redo-apply" onClick="document.execCommand( 'redo',false,null);">
                    <redo></redo>
                </button>
                <button className="fontStyle undo-apply" onClick="document.execCommand( 'undo',false,null);">
                    <undo></undo>
                </button>
                <button className="fontStyle orderedlist"
                        onClick="document.execCommand('insertOrderedList', false, null);">
                    <insertOrderedList></insertOrderedList>
                </button>
                <button className="fontStyle unorderedlist"
                        onClick="document.execCommand('insertUnorderedList',false, null)">
                    <insertUnorderedList></insertUnorderedList>
                </button>
                <input className="color-apply" type="color" onChange="chooseColor()" id="myColor"/>

                <select id="fontSize" onClick="changeSize()">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>

            </fieldset>
            <div id="editor1" contenteditable="true" data-text="Enter comment...."></div>

        </div>
    )
}
