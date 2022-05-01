import { FC, useEffect, useState } from 'react';
const dayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

import styles from "../estimatorStyles/Appointment.module.css";

const Appointment: FC<any> = () => {
    const [appointments, setAppointements] = useState([]);
    const [days, setDays] = useState([new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()])
    const [currentWeek, setCurrentWeek] = useState(0);
    const [appDate, setAppDate] = useState<any>(null);

    const getAppointments = (size: number) => {
        fetch('/api/getAvailability', {
            method: 'POST',
            body: JSON.stringify({
                "size": size,
                "currentWeek": currentWeek
            })
        }).then(res => res.json()).then(res => {
            setDays(res.days)
            setAppointements(res.appointments)
        })
    }
    useEffect(() => {
        if (window.innerWidth <= 820) getAppointments(3);
        else getAppointments(7)
    }, [currentWeek])
    useEffect(() => {
        if (appDate) alert(appDate.toISOString())
     }, [appDate])

    return (
        <>
            <button onClick={() => setCurrentWeek(currentWeek - 1)} disabled={currentWeek <= 0 ? true : false}>PREV WEEK</button>
            <button onClick={() => setCurrentWeek(currentWeek + 1)}>NEXT WEEK</button>
            <h2>{new Date(days[0]).toDateString()} - {new Date(days[6]).toDateString()}</h2>
            <div className={styles.weekGrid}>
            {appointments.map((app: any, index: number) => {
                return (
                    <div className={styles.weekCell}>
                        <p>{dayNames[new Date(days[index]).getDay()]}</p>
                        {app.length ? app.map((time: any) => {
                            const slot = new Date(time.time);
                            return (
                                <>
                                    <p onClick={() => setAppDate(slot)}>{slot.getHours() % 12}</p>
                                </>
                            )
                        }) :<p>BOOKED</p>}
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Appointment;