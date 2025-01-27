import CreateEventForm from "@/components/events/createEventForm";

export default function CreateEventPage() {
    return (
        <div className="flex min-h-screen items-center justify-center flex-col">
        <h1 className="text-2xl font-bold">CreateEvent</h1>
        <CreateEventForm />
        
        </div>
    )
}