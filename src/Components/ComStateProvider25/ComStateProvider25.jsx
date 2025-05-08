import React, { createContext, useState, useCallback } from 'react';

export const StateContext = createContext();

export function StateProvider({ children }) {
  const [state, setState] = useState({
    // text: '',
    target_user_id: 0,
    target_claim_id: 0,
    target_task_id: 0,
    target_release_id: 0,
    target_comment_id: 0,
    target_question_id: 0,
    target_tab_id: 0,
    current_location: '',
    location: '', // Defines jsx template
    open_quest_modal: false,
    open_task_modal: false,
    target_project: 0,
    target_section: 0,
  });

  // Геттеры для каждого свойства
//   const getText = useCallback(() => state.text, [state.text]);
  const getLocation = useCallback(() => state.location, [state.location]);
  const getTargetUserId = useCallback(() => state.target_user_id, [state.target_user_id]);
  // ... остальные геттеры по аналогии

    // Сеттеры для каждого свойства
    const setText = useCallback((newText) => {
        setState(prev => ({ ...prev, text: newText }));
    }, []);

    const setLocation = useCallback((newLocation) => {
        setState(prev => ({ ...prev, location: newLocation }));
    }, []);

    const setTargetUserId = useCallback((newId) => {
        setState(prev => ({ ...prev, target_user_id: newId }));
    }, []);
  
    // ... остальные сеттеры по аналогии

    // Функция для установки нескольких значений сразу
    const setMultiple = useCallback((updates) => {
        setState(prev => ({ ...prev, ...updates }));
    }, []);

  // Функция для сброса состояния
  const resetState = useCallback(() => {
    setState({
    //   text: '',
      target_user_id: 0,
      target_claim_id: 0,
      target_task_id: 0,
      target_release_id: 0,
      target_comment_id: 0,
      target_question_id: 0,
      target_tab_id: 0,
      current_location: '',
      location: '',
      open_quest_modal: false,
      open_task_modal: false,
        target_project: 0,
        target_section: 0,
    });
  }, []);

  return (
    <StateContext.Provider value={{
      state,
      setState,
    //   getText,
      setText,
      getTargetUserId,
      setTargetUserId,
      getLocation, 
      setLocation,
      // ... остальные геттеры и сеттеры
      setMultiple,
      resetState
    }}>
      {children}
    </StateContext.Provider>
  );
}