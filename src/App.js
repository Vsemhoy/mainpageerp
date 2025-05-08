
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import HomePage from './modules/DEFAULT_PAGE/HomePage';
import './components/Main/main.css';
import { Breadcrumb, Layout, Menu, Skeleton, theme, Input, Dropdown, Avatar, Drawer, Button, Badge } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { useEffect, useState } from 'react';
import { DS_NOTICES, DS_USER } from './CONFIG/DEFAULTSTATE';
import { PROD_AXIOS_INSTANCE } from './API/API';
import { CSRF_TOKEN, HOST_COMPONENT_ROOT, HTTP_ROOT, PRODMODE } from './CONFIG/config';

import Search from 'antd/es/input/Search';
import { AppstoreAddOutlined, AppstoreOutlined, BarcodeOutlined, CalendarOutlined, CodeOutlined, ContainerOutlined, HomeOutlined, LogoutOutlined, MenuUnfoldOutlined, NotificationFilled, NotificationOutlined, SettingOutlined, SmileOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/es/menu/SubMenu';


import ars_logo from './images/identics/arstel.svg';
import rondo_logo from './images/identics/rondo.png';

import MenuDivider from 'antd/es/menu/MenuDivider';
import NotiCard from './modules/DEFAULT_PAGE/components/NotiCard';

const { Header, Content, Footer } = Layout;





function App() {
  const menuItems = [

  ];

  const [userAct, setUserAct] = useState(!PRODMODE ? DS_USER : []);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [notificatorOpened, setNotificatorOpened] = useState(false);
  const [notificatorLoading, setNotificatorLoading] = useState(true);
  const [countOfNotifications, setCountOfNotifications] = useState(0);
  const [acls, setAcls] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const [companies, setCompanies] = useState([]);
  const [currentCompany, setCurrentCompany] = useState(0);

  const [noticePage, setNoticePage] = useState(1);
  const [noticeIgnore, setNoticeIgnore] = useState([]);


  /**
   * Текущий адрес страницы
   */
  const [location, setLocation] = useState((new URLSearchParams(window.location.search)).get('location') ? (new URLSearchParams(window.location.search)).get('location') : 'me');
  
    // Чтение параметра из URL при монтировании компонента
    useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const value = searchParams.get('location');
      const idCom = searchParams.get('id_company');

      if (idCom){
        setCurrentCompany(parseInt(idCom));
      } else {
        setCurrentCompany(DS_USER.user.active_company);
      }

      console.log('start page is', value);
      document.title = "ERP";


  }, []);

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = HOST_COMPONENT_ROOT + '/favicon.ico';
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = HOST_COMPONENT_ROOT + '/favicon.ico';
      document.head.appendChild(newFavicon);
    }
  }, []);

  // Обновление URL при изменении состояния location
  // useEffect(() => {
  //     const query = new URLSearchParams(window.location.search);
  //     query.set('location', location); // Устанавливаем новый параметр

  //     // Обновляем URL без перезагрузки страницы
  //     window.history.pushState({}, '', `${window.location.pathname}?${query.toString()}`);
      
  //     console.log('useState' + ' => ' + location);
  // }, [location]);


  useEffect(()=>{
    let notread = notifications.filter((item)=> {return item.is_read === false});
    console.log("notread", notread);
    setCountOfNotifications(notread.length);
    
   },[notifications]);

  const showNotyBar = () => {
    setNotificatorOpened(true);
    setNotificatorLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setNotificatorLoading(false);
    }, 500);
  };

  
/** ------------------ FETCHES ---------------- */
    /**
     * Получение списка отделов
     * @param {*} req 
     * @param {*} res 
     */
    const get_userdata = async (req, res) => {
      try {
          // setLoadingOrgs(true)
          const format_data = {
              CSRF_TOKEN,
              data: {
                  // ...filters,
                  // created_date: get_unix_by_datearray(filters.created_date),
                  // active_date: get_unix_by_datearray(filters.active_date)
              }
          }
          let response = await PROD_AXIOS_INSTANCE.get('/usda?_token=' + CSRF_TOKEN);
          console.log('me: ', response);
          // setOrganizations(organizations_response.data.org_list)
          // setTotal(organizations_response.data.total_count)
          setAcls(response.data.acls);
          setUserAct(response.data);

          setCurrentCompany(response.data.user.active_company);

          let comps = response.data.companies.filter((item)=> item.id > 1);
          comps = comps.sort((a,b) => {return  parseInt(a.id) - parseInt(b.id)});
          setCompanies(comps);

          let com = response.data.companies.find((item)=> item.id === response.data.active_company);
          if (com){
            document.title = "ERP " + com.name;
          };
      } catch (e) {
          console.log(e)
      } finally {
          // setLoadingOrgs(false)
          setPageLoaded(true);
      }
  }


  const changeCompanyAction = async (item)=> {
    try {
      // setLoadingOrgs(true)
      const format_data = {
          CSRF_TOKEN,
          data: {
          }
      }
      let response = await PROD_AXIOS_INSTANCE.get('/auth/me?text=' + item.name + '&id_company=' + item.id + '&_token=' + CSRF_TOKEN);
      
      setAcls(response.data.acls);
      setUserAct(response.data);

      setCurrentCompany(response.data.user.active_company);

      let comps = response.data.companies.filter((item)=> item.id > 1);
      comps = comps.sort((a,b) => {return  parseInt(a.id) - parseInt(b.id)});
      setCompanies(comps);

      let com = response.data.companies.find((item)=> item.id === response.data.active_company);
      if (com){
        document.title = "ERP " + com.name;
      };

  } catch (e) {
      console.log(e)
  } finally {
      // setLoadingOrgs(false)
      // window.location.reload();
  }
  }


  const markNoteRead = async (note_id, req, res) => {
    try {
              let response = await PROD_AXIOS_INSTANCE.put('/api/notice/read/' + note_id + '?_token=' + CSRF_TOKEN,
                  {   
                      data: note_id, 
                      _token: CSRF_TOKEN
                  }
              );
              
                // setBaseUserListData(response.data.data);
            } catch (e) {
                console.log(e)
                alert(e.response.data.message);
            } finally {

        }
    }


    const getFreshNotices = async (item)=> {
      try {
        // setLoadingOrgs(true)
        const format_data = {
            CSRF_TOKEN,
            data: {
            }
        }
        let response = await PROD_AXIOS_INSTANCE.get('/api/notice/fresh' + '?_token=' + CSRF_TOKEN);
        
        setNotifications(response.data.data);
        let ignore = [];
        for (let i = 0; i < response.data.data.length; i++){
          ignore.push(response.data.data[i].id);
        };
        setNoticeIgnore(ignore);
        setCountOfNotifications(ignore.length);

      } catch (e) {
          console.log(e)
      } finally {
          // setLoadingOrgs(false)
          // window.location.reload();
      }
    }


    const getOldNotices = async ()=> {
      try {
        let response = await PROD_AXIOS_INSTANCE.post('/api/notice/old?_token=' + CSRF_TOKEN, 
          {   
            page: noticePage,
            ignore: noticeIgnore,
            _token: CSRF_TOKEN
        });
        
        if (response.data.data.length){
          setNoticePage(noticePage + 1);
          setNotifications(prev => [...prev, ...response.data.data]);

        } 
        if (response.data.data.length < 12){
          setNoticePage(-1);
        }

      } catch (e) {
          console.log(e)
      } finally {
          // setLoadingOrgs(false)
          // window.location.reload();
      }
    }


  /** ------------------ FETCHES END ---------------- */


      // EFFECTS
      useEffect(() => {
        if (PRODMODE){
          get_userdata();
          getFreshNotices();
        } else {
          // Текущая компания выбирается из GET-строки для теста переключения
          // setCurrentCompany(DS_USER.user.active_company);
          let comps = DS_USER.companies.filter((item)=> item.id > 1);
          comps = comps.sort((a,b) => {return  parseInt(a.id) - parseInt(b.id)});
          setCompanies(comps);
          setAcls(DS_USER.acls);
          setNotifications(DS_NOTICES);

        }
      }, []);


      
      useEffect(()=>{ 
        console.log('sorted companies');
        console.log(companies);

        let com = DS_USER.companies.find((item)=> item.id === currentCompany);
        if (com){
          document.title = "ERP " + com.name;
        };
    },[companies]);

    const userMenu = (
      <Menu>
        <Menu.Item key="status">Статус: Онлайн</Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          Настройки
        </Menu.Item>
        <Menu.Item key="block" icon={<ThunderboltOutlined />}>
          Заблокировать
        </Menu.Item>
        { acls.includes(4) && (
        <Menu.Item key="adjklfa" icon={<NotificationOutlined />}>
          <a href='/time?location=notificator'>Нотификатор</a>
        </Menu.Item>
        )}
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          <a href='/logout'>Выйти</a>
        </Menu.Item>
      </Menu>
    );
    

    // if (comps.length > 1){
    //   setCompanies(comps.map((item)=>({
        
    //       key: `mitem_${item.id}`,
    //       label: (
    //         <a rel="noopener noreferrer" href={'/auth/me?redirect=back&text=' + item.name + '&id_company=' + item.id + '&_token=' + CSRF_TOKEN}>
    //           {item.name}
    //         </a>
    //       ),
    //       value: item.name, 
    //   })));
    // };

    const notificationRead = (id) => {
      setNotifications(prev => 
        prev.map(notification => 
          notification.id === id 
            ? { ...notification, is_read: true } 
            : notification
        )
      );
      markNoteRead(id);
    };

  return (
    <Layout style={{background: '#fff'}}>
          <Router>
          <div >


      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        className={'sk-main-menu'}
      >
        <div style={{display: 'flex', minWidth: '162px', marginLeft: '22px'}}>
          <Dropdown
            
            menu={{ items: 
            companies.map((item)=>({
                    
              key: `mitem_${item.id}`,
              label: (
                  <a onClick={()=>{changeCompanyAction(item)}}
                  ><span className='sk-r-badge' style={{backgroundColor: item.color}}> </span><span>{item.name}</span></a>
              ),
              // className: currentCompany == item.id ? "active_company" : "",
              className:'sk-company-trigger',
              disabled: currentCompany == item.id,
              
            }))

          }}
          active={3}
          >
            <div className={'sk-main-logo'}>
              { currentCompany === 2 && (<img src={"/images/identics/arstel.svg"} alt="Арстел" style={{ minHeight: '30px'}} />) }
          
              { currentCompany === 3 && (<img src={"/images/identics/rondo.png"} alt="Рондо" style={{ minHeight: '30px'}} />) }

              { currentCompany === 4 && (<img src={"/images/identics/affa.svg"} alt="Affa" style={{ minHeight: '30px'}} />) }

            </div>
          </Dropdown>
        </div>
        {/* Первая группа */}
        <Menu mode="horizontal" style={{ background: '#00000000', flex: 1}}>
          {/* <Menu.Item key="home" icon={<HomeOutlined  style={{ fontSize: '20px', color: '#fff', marginTop: '6px',
           textAlign: 'center', paddingLeft: '6px' }} />} ><a href={HTTP_ROOT}></a></Menu.Item> */}

          {/* Здесь конкретного доступа нет - входят все */}

          { acls.includes(2) && (
            <MenuItem
              icon={<CalendarOutlined />}
              key={'menu_52d35hg4'}>
                <a href='/time'>СКУД
                </a>
              </MenuItem>
         )}
            
          { acls.includes(51) && (
            <MenuItem
            icon={<BarcodeOutlined />}
              key={'menu_52fdd3453f4'}>
                <a href='/newsales'>Отдел продаж</a>
              </MenuItem>
          )}
          
            { acls.includes(104) && (
            <MenuItem
              icon={<ContainerOutlined />}
              key={'menu_52fdd3sdg453f4'}>
                <a href='/certification'>Сертификация</a>
            </MenuItem>
            )}

            { (acls.includes(2) || acls.includes(135) || acls.includes(137)) && (
            
            <Menu.SubMenu key="menu1" title="Утилиты"
              icon={<CodeOutlined />}
            >
            { acls.includes(135) && (
              <MenuItem
              key={'menu_52dggh34'}>
                <a href='/currency'>Курсы валют</a>
              </MenuItem>
            )}

            { acls.includes(137) && (
              <MenuItem
              key={'menu_5dss2s34'}>
                <a href='/utils/zword'>Синонимайзер для Sales</a>
              </MenuItem>
            )}

            { acls.includes(2) && (
              <MenuItem
              key={'menu_52ssdf34'}>
                <a href='/pechkin'>Проброс запроса</a>
              </MenuItem>
            )}
            </Menu.SubMenu>
          )}




          { (acls.includes(121) || acls.includes(122) || acls.includes(124) || acls.includes(125)
          || acls.includes(82) || acls.includes(83) || acls.includes(36) || acls.includes(102)
        ) && (
          <Menu.SubMenu key="menu31" title="Дополнительно" icon={<AppstoreAddOutlined />}>

        { (acls.includes(121) || acls.includes(122) || acls.includes(124) || acls.includes(125)) && (
            <MenuItem
            key={'menu_d334hgfd'}>
              <a href='/import'>База Вэд</a>
            </MenuItem>
            )}

          { (acls.includes(82) || acls.includes(83)) && (
            <MenuItem
            key={'menu_5gfds34'}>
              <a href='/finance/timetable'>Табель</a>
            </MenuItem>
          )}
            
          { acls.includes(36) && (
            <MenuItem
            key={'menu_56gafdgsd34'}>
              <a href='/projects'>Проектный отдел</a>
            </MenuItem>
            
          )}
          { acls.includes(102) && (
            <MenuItem
            key={'menu_52asdf44'}>
              <a href='/catalog'>Каталог</a>
            </MenuItem>
          )}

          </Menu.SubMenu>
          )}

       
        </Menu>

        

        {/* Вторая группа */}
        {/* <Input.Search placeholder="Поиск" style={{ maxWidth: '200px', margin: '0 20px' }} /> */}

        {/* Третья группа */}
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <div onClick={showNotyBar} style={{ cursor: "pointer", marginRight: '24px'}}>
            <Badge count={countOfNotifications} offset={[2, 24]}>
            <Avatar style={{ backgroundColor: '#33333300', marginRight: '0px' }}>
                { userAct ? (
                  // <SmileOutlined  style={{ fontSize: '36px', color: '#08c' }} />
                  <NotificationOutlined style={{ fontSize: '36px', color: '#3d3d3d' }} />
                ) : (
                  <ThunderboltOutlined />
                )}
              </Avatar>
              </Badge>
            </div>


          <Dropdown overlay={userMenu} trigger={['hover']}>
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>

              { userAct && userAct.user ? (
                <span style={{fontWeight: 500, color: "#3d3d3d"}}>{userAct.user.name} {userAct.user.patronymic}</span>
              ) : (
              <span>Пользователь</span>

              )}
            </div>
          </Dropdown>
        </div>

        { (acls.includes(143) || acls.includes(14)) && (
        <Menu mode="horizontal" style={{ background: '#00000000'}} title="Администрирование">

          <Menu.SubMenu key="menu331" title="" icon={<MenuUnfoldOutlined />}>
 
                <MenuItem disabled={true}>
                  Администрирование
                </MenuItem>
            
              <MenuDivider/>
              
              { acls.includes(143) && (
              <MenuItem
              key={'menu_d34'}>
                <a href='/admin/staff/manager'>Менеджер учётных записей</a>
              </MenuItem>
            )}
            { acls.includes(14) && (
              <MenuItem
              key={'menu_5344'}>
                <a href='/admin/access/aclmain'>ACL ALAN</a>
              </MenuItem>
              )}

            { acls.includes(14) && (
              <MenuItem
              key={'menu_32345344'}>
                <a href='/admin/access/section/skud'>ACL MAIN Classic</a>
              </MenuItem>
              )}
              
            { acls.includes(14) && (
              <MenuItem
              key={'menu_565434'}>
                <a href='/admin/access/aclcompanies'>Доступ сотрудников к компаниям</a>
              </MenuItem>
               )}
              
           { acls.includes(14) && (
              <MenuItem
              key={'menu_52к3544'}>
                <a href='/admin/access/aclmodels'>Доступ моделей к компаниям</a>
              </MenuItem>
            )}
              
              { acls.includes(14) && (
              <MenuItem
              key={'menu_52634564'}>
                <a href='/admin/info'>Инфо о доступах</a>
              </MenuItem>
            )}
            </Menu.SubMenu>
        </Menu>
          )}
            
            

      </Header>

      <Content style={{ padding: '0 48px' }}>
        
        
          { pageLoaded || !PRODMODE ? (
        <div>
            <HomePage userdata={userAct} />

          </div>
          ) : (
            <div>
              <Skeleton />
            </div>
          )} 
        

        
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<UserList userdata={userAct}/>} />
          <Route path="/page" element={<UserPage />} />
          </Routes> */}
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


      <Drawer
        closable
        destroyOnClose
        title={<p>Уведомления</p>}
        placement="right"
        open={notificatorOpened}
        loading={notificatorLoading}
        onClose={() => setNotificatorOpened(false)}
      >
        {/* <Button type="primary" style={{ marginBottom: 16 }} onClick={showNotyBar}>
          Reload
        </Button>
        <p>Новых уведомлений не найдено...</p> */}
        <div>
          {notifications.map((item)=>(
            <NotiCard 
              data={item}
              key={`notic_${item.id}`}
              on_read={notificationRead}
            />
          ))}
        </div>
          
        { noticePage > 0 && (
          <Button type="dashed" block
            onClick={getOldNotices}
          >
            Показать старые уведомления
          </Button>
        )}

      </Drawer>


      </div>
    </Router>
    </Layout>
  );
}

export default App;
