import React, { useContext } from "react";
import { StateContext, StateProvider } from "../../../Components/ComStateProvider25/ComStateProvider25";
import MenuBox from "../../../Components/MimiTemplate/components/MENUBOX/MenuBox";
import BreadCrumbBox from "../../../Components/MimiTemplate/components/BREADCRUMBS/BreadCrumbBox";
import ExecutorKanbanBoard from "./components/ExecutorKanbanBoard";
import { Button, Dropdown } from "antd";

const ExecutorEditorPage = (props) => {
    const {state, setState} = useContext(StateContext);
    const {userData} = props;


    
    return (
        <div className={'mi-page-wrapper'}>
            <div className={"mi-ska-mw-1400"}>
                <MenuBox />
                <br/>
            <BreadCrumbBox></BreadCrumbBox>
                <br />
            </div>

            <div className={'mi-layout-leftsidebar-mini'}>
                <div className={'mi-bg-base'}>
                    f jashdjfkasd jf
                    sdf asjhdfhas
                </div>
                <div>
                    <div className={'mi-pa-12 mi-flex-space'}>
                        <div></div>
                        <div className="mi-flex" style={{gridGap: '12px'}}>
                            <Button type="primary">primary</Button>
                            <Button>Закрытые</Button>
                            <Dropdown.Button
                            menu={{items:
                                [
                                { id: 'waiting', title: 'Ожидает' },
                                { id: 'in_progress', title: 'В работе' },
                                { id: 'testing', title: 'Тестирование' },
                                { id: 'completed', title: 'Завершено' },
                                { id: 'rejected', title: 'Отклонено' },
                                { id: 'postponed', title: 'Отложено' }
                            ].map((item)=>{return {
                                key: item.id,
                                label: item.title
                            }})
                                // onClick: onMenuClick,
                            }}
                            >
                            Колонки
                            </Dropdown.Button>
                        </div>
                    </div>
                    <ExecutorKanbanBoard 

                    />
                </div>


            </div>

        </div>
        
    )
};

export default ExecutorEditorPage;