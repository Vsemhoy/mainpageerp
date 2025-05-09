import { CommentOutlined } from "@ant-design/icons";
import React, { useContext, useId, useState } from "react";
import CommentForm from "./CommentForm";
import { StateContext } from "../../../ComStateProvider25/ComStateProvider25";
import dayjs from "dayjs";
import MDEditor from "@uiw/react-md-editor";

const StackComment = (props) => {
    const [level, setLevel] = useState(props.level ? props.level : 1);
    const {editedComment, setEditedCommentId} = useContext(StateContext);

    const [createMode, setCreateMode] = useState(false);

    const [openEditor, setOpenEditor] = useState(false);
    const [openStack, setOpenStack] = useState(false);
    const [countInStack, setCountInStack] = useState(2);
    
    const [itemId, setItemId] = useState(useId());

    const [itemBaseText, setItemBaseText] = useState('We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.');
    const [itemText, setItemText] = useState('We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.');

    const handleOpenEditor = ()=>{
        setCreateMode(false);
        setOpenEditor(!openEditor);
        console.log('editedComment', editedComment)
        setEditedCommentId(itemId);
    }
    const handleOpenEditorNew = ()=>{
        setCreateMode(true);
        setOpenEditor(!openEditor)
        setEditedCommentId(0);
    }
    const handleOpenStack = ()=>{
        setOpenStack(!openStack)
    }

    const handleTextChange = (text)=>{
        setItemText(text);
    }

    const handleDiscardChange = ()=>{
        setItemText(itemBaseText);
        setOpenEditor(false);
        setEditedCommentId(0);
    }

    const handleSaveComment = (value) => {
        setItemText(value);
        setOpenEditor(false);
        setEditedCommentId(0);
    }

    return (
        <div className={'mi-stack-comment-wrapper'}>
            <div className={'mi-stack-comment'}>
                <div className={'mi-stack-comment-meta'}>
                    MS
                </div>
                <div>
                    <div className={'mi-stack-comment-meta'}>
                        Han Solo
                        8 hours ago {itemId}
                    </div>
                    <div className="stack-comment-text">
                        <MDEditor.Markdown
                            className="markdown-body--light"
                        source={itemText} />
                    </div>
                    <div className="mi-flex-space">
                        <div className={'mi-flex'}>

                            <div className={'mi-card-meta-info'}
                                onClick={handleOpenEditor}
                            >
                                Редактировать
                            </div>
                            <div className={'mi-card-meta-info'}
                                onClick={handleOpenEditorNew}
                            >
                                Ответить  
                            </div>
                        </div>
                        <div>
                        {level === 1 && (
                            <div className={'mi-card-meta-info'}
                                onClick={handleOpenStack}
                            >
                                <CommentOutlined /> {countInStack} раскрыть
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
            {!createMode && openEditor && itemId === editedComment  && (
                <CommentForm 
                    on_change_text={handleTextChange}
                    text={itemText}
                    on_discard={handleDiscardChange}
                    on_save={handleSaveComment}
                />
            )}
            {openStack && level === 1 && (
                <div className={'mi-comment-stack-in'}>
                    <div></div>
                    <div>
                        <StackComment level={level + 1} />
                        <StackComment level={level + 1} />

                    </div>
                </div>
            )}
            {createMode && openEditor  && editedComment === 0 && (
                <CommentForm 

                />
            )}
        </div>
    )
}

export default StackComment;