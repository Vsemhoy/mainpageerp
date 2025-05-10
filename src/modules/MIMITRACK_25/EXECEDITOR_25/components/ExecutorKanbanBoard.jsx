import React, { useState, useId } from 'react';
import './style/sortablekanban.css';
import { Button, Dropdown, Empty } from 'antd';
import dayjs from 'dayjs';
import { BarsOutlined } from '@ant-design/icons';


const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Создать копию
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Удалить
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Заблокировать (скрыть)
      </a>
    ),
  },
];

const ExecutorKanbanBoard = () => {
  const now = new Date();
    const [tasks, setTasks] = useState([
            { id: '1', title: 'Разработать API', description: 'Создать endpoints для пользователей', status: 'waiting', priority: 'high', updated_at: new Date(now - 1000 * 60 * 60 * 24 * 2).toISOString() },
            { id: '2', title: 'Написать тесты', description: 'Покрыть модульными тестами сервис авторизации', status: 'in_progress', priority: 'medium', updated_at: new Date(now - 1000 * 60 * 60 * 24).toISOString() },
            { id: '3', title: 'Исправить баг', description: 'Исправить проблему с кэшированием', status: 'testing', priority: 'high', updated_at: new Date(now - 1000 * 60 * 60 * 12).toISOString() },
            { id: '4', title: 'Обновить документацию', description: 'Добавить новые endpoints в Swagger', status: 'completed', priority: 'low', updated_at: new Date(now - 1000 * 60 * 60 * 6).toISOString() },
            { id: '5', title: 'Рефакторинг', description: 'Улучшить структуру проекта', status: 'rejected', priority: 'medium', updated_at: new Date(now - 1000 * 60 * 60 * 3).toISOString() },
            { id: '6', title: 'Интеграция с платежами', description: 'Добавить поддержку PayPal', status: 'postponed', priority: 'high', updated_at: new Date(now - 1000 * 60 * 60 * 1).toISOString() },
            { id: '7', title: 'Обновить зависимости', description: 'Проверить обновления npm пакетов', status: 'waiting', priority: 'low', updated_at: new Date(now).toISOString() },
            { id: '8', title: 'Оптимизация запросов', description: 'Добавить индексы в базу данных', status: 'in_progress', priority: 'high', updated_at: new Date(now - 1000 * 60 * 30).toISOString() },
        ]);

    const columns = [
        { id: 'waiting', title: 'Ожидает' },
        { id: 'in_progress', title: 'В работе' },
        { id: 'testing', title: 'Тестирование' },
        { id: 'completed', title: 'Завершено' },
        { id: 'rejected', title: 'Отклонено' },
        { id: 'postponed', title: 'Отложено' },
    ];

    const [visibleColumns, setVisibleColumns] = useState(['waiting','in_progress','testing','completed',]);

    const [draggedItem, setDraggedItem] = useState(null);
    const [dragOverColumn, setDragOverColumn] = useState(null);

    const handleDragStart = (e, task) => {
        setDraggedItem(task);
        e.dataTransfer.setData('text/plain', task.id);
        e.target.classList.add('dragging');
    };

    const handleDragOverColumn = (e, columnId) => {
        e.preventDefault();
        setDragOverColumn(columnId);
        
        // Подсветка колонки
        document.querySelectorAll('.mi-sortable-column').forEach(col => {
            col.style.backgroundColor = col.dataset.status === columnId ? '#f0f0f0' : '';
        });
    };

    const handleDropOnColumn = (e, columnId) => {
        e.preventDefault();
        
        if (!draggedItem) return;
        
        // Обновляем статус задачи
        const updatedTasks = tasks.map(task => {
            if (task.id === draggedItem.id) {
                return {
                    ...task, 
                    status: columnId,
                    updated_at: new Date().toISOString() // Обновляем временную метку
                 };
            }
            return task;
        });
        
        setTasks(updatedTasks);
        resetDragState();
        
        // Сбрасываем подсветку колонок
        document.querySelectorAll('.mi-sortable-column').forEach(col => {
            col.style.backgroundColor = '';
        });
    };

    const handleDragEnd = () => {
        resetDragState();
    };

    const resetDragState = () => {
        setDraggedItem(null);
        setDragOverColumn(null);
        document.querySelectorAll('.sort-item.dragging').forEach(el => {
            el.classList.remove('dragging');
        });
    };

        // Функция для сортировки задач по updated_at (новые сверху)
    const sortTasks = (tasks) => {
        return [...tasks].sort((a, b) => {
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'red';
            case 'medium': return 'orange';
            case 'low': return 'green';
            default: return 'gray';
        }
    };

    const handleCreateTask = () =>{
      let item = { id: dayjs().toISOString() , title: 'Разработать API', description: 'Создать endpoints для пользователей', status: 'waiting', priority: 'high', updated_at: new Date(now - 1000 * 60 * 60 * 24 * 2).toISOString() };
      setTasks([...tasks, item]);
    }
//     const handleDropOnColumn = async (e, columnId) => {
//     e.preventDefault();
//     if (!draggedItem) return;
    
//     try {
//         const response = await fetch(`/api/tasks/${draggedItem.id}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ status: columnId })
//         });
//         const updatedTask = await response.json();
        
//         setTasks(tasks.map(task => 
//             task.id === updatedTask.id ? updatedTask : task
//         ));
//     } catch (error) {
//         console.error('Ошибка обновления:', error);
//     }
    
//     resetDragState();
// };



    return (
        <div className='mi-so-container'>
            {columns.filter((itm)=> visibleColumns.includes(itm.id))
            .map((col) => {
              const columnTasks = sortTasks(tasks.filter(task => task.status === col.id));
              
              return (
                <div className='mi-sortable-column-wrapper mi-bg-base' key={`sortcol_${col.id}`}>
                    <div className={'mi-pa-12'}><span>{col.title}</span>
                    </div>
                    {col.id === 1 || col.id === 'waiting' && (
                      <div className={'mi-pa-12'}>
                      <Button block
                        onClick={handleCreateTask}
                      >Create</Button>
                      </div>
                    )}

                    <div 
                        className='mi-sortable-column'
                        onDragOver={(e) => handleDragOverColumn(e, col.id)}
                        onDrop={(e) => handleDropOnColumn(e, col.id)}
                        data-status={col.id}
                        style={{
                            minHeight: '500px',
                            border: dragOverColumn === col.id ? '2px dashed #1890ff' : 'none'
                        }}
                    >
                        {columnTasks.length === 0 && (
                            <div className="empty-column-placeholder">
                                <Empty />
                            </div>
                        )}
                        
                        {columnTasks
                            
                            .map((task) => (
                                <div
                                    key={task.id}
                                    className='sort-item'
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, task)}
                                    onDragEnd={handleDragEnd}
                                    style={{
                                        borderLeft: `4px solid ${getPriorityColor(task.priority)}`,
                                        opacity: draggedItem?.id === task.id ? 0.5 : 1
                                    }}
                                >
                                    <div className='sort-head'>
                                      <div>#{task.id}</div>
                                      <Dropdown menu={{ items }} placement="bottomRight">
                                      <div className='mi-sort-head-trig'><BarsOutlined /></div>
                                      </Dropdown>
                                    </div>
                                    <div className='task-content'>
                                        <h4>{task.title}</h4>
                                        <p>{task.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )})}
        </div>
    );
};

export default ExecutorKanbanBoard;