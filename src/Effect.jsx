import React, { useEffect, useState } from 'react'

function Effect() {
    const [users, setUsers] = useState([])
    const [q, setQ] = useState("");
    useEffect(() => {
        const ctrl = new AbortController(); 
        (async ()=> {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {     //ดึงข้อมูลจาก API
                signal: ctrl.signal,    //ใช้ signal เพื่อยกเลิกการดึงข้อมูล
            });
            const data = await response.json();     //แปลงข้อมูลเป็น JSON
            setUsers(data);       //เก็บข้อมูลใน state ที่ชื่อ user
        } catch (error) {
            if (error.name === 'AbortError') {   //กรณีการดึงข้อมูลถูกยกเลิก
                console.log('Fetch aborted');
            }
        }
        })();

        return () => ctrl.abort();    //ยกเลิกการดึงข้อมูลเพื่อคอมโพเนนต์ถูก unmount
    }, []);

    console.log(users);
    const filtered = users.filter(
        (u) => u.name.toLowerCase().includes(q.toLowerCase()) //กรองข้อมูลตามชื่อผู้ใช้
    )

    return (
        <>
      <input
        placeholder="Search"
        value={q}
        onChange={(e) => setQ(e.target.value)}   //อัพเดตค่า q เมื่อมีการเปลี่ยนแปลงใน input
      />
      <ul>
        {filtered.map((u) => (
          <li key={u.id}> {u.name}</li>
        ))}
      </ul>
    </>
    );
}

export default Effect
