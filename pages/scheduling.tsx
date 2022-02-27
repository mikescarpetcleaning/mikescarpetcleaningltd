import type { NextPage } from 'next';

const Scheduling: NextPage = () => {
    return (
        <>
            <style>{`.contactFlag{display:none;}`}</style>
            <iframe 
                src="https://app.squarespacescheduling.com/schedule.php?owner=20895810" 
                title="Schedule Appointment" 
                width="100%" 
                height="1000px" 
                frameBorder="0">
            </iframe>
            
            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </>
    )
}
export default Scheduling;