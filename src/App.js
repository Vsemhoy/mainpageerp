
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './Assets/style/main.css';
import { Breadcrumb, Layout, Menu, Skeleton, theme, Input, Dropdown, Avatar, Drawer, Button, Badge } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { useContext, useEffect, useState } from 'react';
import { DS_NOTICES, DS_USER } from './CONFIG/DEFAULTSTATE';
import { PROD_AXIOS_INSTANCE } from './API/API';
import { CSRF_TOKEN, HOST_COMPONENT_ROOT, HTTP_ROOT, PRODMODE } from './CONFIG/config';

import Search from 'antd/es/input/Search';
import { AppstoreAddOutlined, AppstoreOutlined, BarcodeOutlined, CalendarOutlined, CodeOutlined, ContainerOutlined, HomeOutlined, LogoutOutlined, MenuUnfoldOutlined, NotificationFilled, NotificationOutlined, SettingOutlined, SmileOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/es/menu/SubMenu';


import ars_logo from './images/identics/arstel.svg';
import rondo_logo from './images/identics/rondo.png';

import MenuDivider from 'antd/es/menu/MenuDivider';
import NotiCard from './modules/GLOBAL/DEFAULT_PAGE/components/NotiCard';

import './Assets/style/theme.css';
import './Assets/style/layout.css';
import CommonMenu14 from './Components/MimiTemplate/commoncom/COMMONMENU14/CommonMenu14';
import { StateContext } from './Components/ComStateProvider25/ComStateProvider25';


import HomePage from './modules/GLOBAL/DEFAULT_PAGE/HomePage';
import ClaimPage from './modules/MIMITRACK_25/CLAIMPAGE_25/ClaimPage25';
import ExecutorListPage from './modules/MIMITRACK_25/EXECUTORLIST_25/ExecutorListPage25';
import ClaimEditorPage25 from './modules/MIMITRACK_25/CLAIMEDITORPAGE_25/ClaimEditorPage25';
import ExecutorEditorPage from './modules/MIMITRACK_25/EXECEDITOR_25/ExecutorEditorPage25';
import TaskEditorPage from './modules/MIMITRACK_25/TASKEDITORPAGE_25/TaskEditorPage25';
import ReleaseEditorPage from './modules/MIMITRACK_25/RELEASEEDITOR_25/ReleaseEditorPage25';
import ReleasePage from './modules/MIMITRACK_25/RELEASEPAGE_25/ReleasePage25';
import ClaimListPage from './modules/MIMITRACK_25/CLAIMS_25/ClaimListPage25';
import ReleaseListPage from './modules/MIMITRACK_25/RELEASES_25/ReleaseListPage25';
import QuestionListPage from './modules/MIMITRACK_25/QUESTIONS_25/QuestionListPage25';
import SettingsPage from './modules/MIMITRACK_25/SETTINGS_25/SettingsPage25';
import ParseRoute from './Components/HybridEmbeddedRouter/RouteParser';
import StateBar25 from './Components/MimiTemplate/components/STATEBAR/StateBar25';



const { Header, Content, Footer } = Layout;

function App() {
  const { state, setState } = useContext(StateContext);

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
    const handleLocationChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const locationParam = searchParams.get('location');
      
      if (locationParam) {
        const path = decodeURIComponent(searchParams);
        const newState = ParseRoute(path);

        console.log('newState:', newState);
        setState(newState);
      }
    };

    // Обрабатываем начальный URL
    handleLocationChange();

    // Подписываемся на изменения истории
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
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



      <CommonMenu14 
        on_change_company={changeCompanyAction}
        on_show_notibar={showNotyBar}
        companies={companies}
        acls={acls}
        current_company={currentCompany}
      />
      




      {state.location === '' && <HomePage user_data={userAct}/>}
      {state.location === 'home' && <HomePage />}

      {state.location === 'mtrack' && <ReleasePage />}

      {state.location === 'claims' && <ClaimListPage />}
      {state.location === 'claimpage' && <ClaimPage />}
      {state.location === 'claimeditor' && <ClaimEditorPage25 />}

      {state.location === 'executor' && <ExecutorEditorPage />}
      {state.location === 'execeditor' && <ExecutorEditorPage />}

      {state.location === 'taskeditor' && <TaskEditorPage />}
      {state.location === 'releaseeditor' && <ReleaseEditorPage />}
      
      {state.location === 'releases' && <ReleaseListPage />}
      {state.location === 'questions' && <QuestionListPage />}
      {state.location === 'settings' && <SettingsPage />}


      {state.location === 'releasepage' && <ReleasePage />}    






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

        <StateBar25 />

      </div>
    </Router>
    </Layout>
  );
}

export default App;
