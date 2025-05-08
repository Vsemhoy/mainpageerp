import React from "react";
import { StateContext, StateProvider } from "../../../Components/ComStateProvider25/ComStateProvider25";
import MenuBox from "../../../Components/MimiTemplate/components/MENUBOX/MenuBox";
import { useContext } from "react";
import BreadCrumbBox from "../../../Components/MimiTemplate/components/BREADCRUMBS/BreadCrumbBox";
import { Button, Input, Pagination } from "antd";
import ClaimCard25 from "../../../Components/MimiTemplate/components/CLAIMCARD/ClaimCard25";

const ClaimListPage = (props) => {
    const {state, setState} = useContext(StateContext);
    const {userData} = props;


    
    return (
        <div className={'mi-page-wrapper'}>
        <div className={"mi-ska-mw-1400"}>
            <MenuBox />
            <br/>

            <BreadCrumbBox />
            <br/>

            <div className={'mi-page-body mi-layout-leftsidebar'}>
                <div>
                    <div className={'mi-bg-base mi-pa-9'}>
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                        <Input />

                    </div>
                </div>
                <div>
                    <div className={'mi-flex-space'}>
                        <div className={'mi-pa-6'}>
                            <Pagination
                                showSizeChanger
                                // onShowSizeChange={onShowSizeChange}
                                defaultCurrent={3}
                                total={500}
                                disabled
                                />
                        </div>
                        <Button>
                            Make new
                        </Button>
                    </div>
                    
                    <div className={'mi-bg-base mi-mt-12'}>
                        <div className={'mi-content-stack'}>
                            <ClaimCard25 
                             
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default ClaimListPage;