import CorreosEvent from '@/interfaces/Correos.interface'

export default function OrderEvent(event: Readonly<CorreosEvent>) {
    console.log('event', event)
    return (
        <div>
            <h1>Event: {event.desPhase}</h1>
            <p>{event.eventDate}</p>
            <p>{event.eventTime}</p>
            <p>{event.extendedText}</p>
        </div>
    )
}
