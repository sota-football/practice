import React, { useState, useRef } from 'react';
import "./StudyRoom.css";

const StudyRoom = () => {

    const useSeatRef = useRef(null); //利用するときの席番号
    const leaveSeatRef = useRef(null); //退出するときの席番号
    const timeRef = useRef(null); //利用時間のselect要素への参照

    const [using, setUsing] = useState([
        {id:1, state: 'true', time: null},
        {id:2, state: 'true', time: null},
        {id:3, state: 'true', time: null},
        {id:4, state: 'true', time: null},
        {id:5, state: 'true', time: null},
        {id:6, state: 'true', time: null},
        {id:7, state: 'true', time: null},
        {id:8, state: 'true', time: null},
        {id:9, state: 'true', time: null}
    ]);

    //const [disabledSeats, setDisabledSeats] = useState([]);
    //const [errorMessage, setErrorMessage] = useState("");
    

    const handleUseClick = () => {
        const selectedSeatId = useSeatRef.current.value; // 選択された席番号の値
        const selectedTime = timeRef.current.value; // 選択された席番号の利用時間

        //決定が押されたときに利用可から利用不可に変更する。
        const updatedUsing = using.map(item => {
            if (item.id === parseInt(selectedSeatId)) {
              return { ...item, state: 'false', time: selectedTime};
            }

            return item;
        });
        
        setUsing(updatedUsing);
        //setDisabledSeats(disabledSeats => [...disabledSeats, selectedSeatId]);
    };

    const handleLeaveClick = () => {
        const selectedSeatId = leaveSeatRef.current.value; // 選択された席番号の値

        //決定が押されたときに利用不可から利用可に変更する。
        const updatedUsing = using.map(item => {
            if (item.id === parseInt(selectedSeatId)) {
              return { ...item, state: 'true', time: null };
            }
            return item;
        });
        
        setUsing(updatedUsing);
    };

  return (
    <div className="PostPage">
        <div className="header">
            <p>自習室の利用状況</p>
        </div>
        <div className="body">
            <div className="Containers">
                <div className="Container">
                    <p>自習室を利用する</p>
                    <div>席番号</div>
                        <select ref={useSeatRef} className='select'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    
                    <div>予定利用時間</div>
                        <select ref={timeRef} className='select'>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                        </select>
                    <button className="decide" onClick={handleUseClick}>決定</button>
                </div>
                <div className='Container_2'>
                    <p>自習室を退席する</p>
                    <div>席番号</div>
                        <select ref={leaveSeatRef} className='select'> 
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        <button className="decide" onClick={handleLeaveClick}>決定</button>
                </div>      
            </div>
            <div className='YesOrNot'>
                {using.map(item => (
                    <div key={item.id}>
                        {item.state === 'true' ? <p>{item.id   } 利用可</p> : <p>{item.id   } 利用不可 {item.time  }まで</p>}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
};

export default StudyRoom;