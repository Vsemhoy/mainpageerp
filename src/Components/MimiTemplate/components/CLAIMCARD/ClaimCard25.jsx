import React, { useId, useState } from "react";

import './style/claimcard.css';
import { ApartmentOutlined, CommentOutlined, EditOutlined } from "@ant-design/icons";
import CommentStack from "../COMMENTSTACK/CommentStack";
import Her from "../../../HybridEmbeddedRouter/Her";

const ClaimCard25 = (props)=>{
    const [openEditor, setOpenEditor] = useState(false);
    const [openComments, setOpenComments] = useState(false);
    const [countComments, setCountComments] = useState(2);

    const [itemId, setItemId] = useState(useId());

    const handleOpenComments = ()=>{
        setOpenComments(!openComments);
    }

    return (
        <div className="mi-claim-card-wrapper">
            <div className="mi-claim-card">
                <div className={'mi-flex'}>
                    <div className={'mi-pa-6'}>
                        34
                    </div>
                    <div className={'mi-pa-6 mi-card-title'}>
                        Сделать много всякой всячины и так далее
                    </div>
                </div>
                <div className={'mi-flex-space'}>
                    <div>
                        <Her href={'claims/editor/' + itemId + '&claim=' + itemId} >
                        <div className={'mi-card-meta-info'}>
                            <EditOutlined /> Редактировать
                        </div>
                        </Her>
                    </div>
                    <div>
                        
                    </div>
                    <div className={'mi-flex'}>
                        <div className={'mi-card-meta-info'}>
                            <ApartmentOutlined /> 216
                        </div>
                        <div className={'mi-card-meta-info'}
                            onClick={handleOpenComments}
                        >
                            <CommentOutlined /> 216
                        </div>
                    </div>
                </div>
            </div>
        {openComments && (
            <CommentStack />
        )}

        </div>
    );
}

export default ClaimCard25;