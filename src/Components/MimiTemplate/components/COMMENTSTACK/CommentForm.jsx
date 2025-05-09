import React, { useEffect, useState } from "react";
import StackComment from "./StackComment";
import './style/stackcomment.css';
import { Avatar, Button, Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import MDEditor from "@uiw/react-md-editor";

const CommentForm = (props) => {
    const [text, setText] = useState('');
    const [previewMode, setPreviewMode] = useState(false);

    useEffect(()=>{
        setText(props.text);
    },[props.text]);

    useEffect(()=>{
        if (previewMode && props.on_change_text){
            props.on_change_text(text);
        }
    },[previewMode]);

    const handleTextChange = (value) => {
        setText(value);
        if (previewMode && props.on_change_text){
            props.on_change_text(value);
        }
    };

    const handleDiscard = () => {
        if (props.on_discard){
            props.on_discard();
        }
    };

        const handleSave = () => {
        if (props.on_save){
            props.on_save(text);
        }
    };

    return (
        <div className={'mi-comment-wrapper'}>
        <div className={'mi-comment-body'}>
            <div className={'mi-pa-6'}> 
            
            <MDEditor
                className="markdown-body--light"
                value={text}
                onChange={handleTextChange}
                preview={'edit'}
            />

            </div>
            <div className={'mi-flex-space'}>
                <div>

                </div>
                <div className={'mi-pa-6 mi-flex'} style={{gridGap: '12px'}}>                    
                    <Button
                        type={previewMode ? 'primary' : 'default'}
                        onClick={()=>{setPreviewMode(!previewMode)}}
                    size="small">Просмотр</Button>
                    <Button size="small"
                        onClick={handleDiscard}
                    >Отменить</Button>
                    <Button
                        onClick={handleSave}
                    size="small">Сохранить</Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CommentForm;