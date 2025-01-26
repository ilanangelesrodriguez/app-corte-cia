import { CategoryName } from "./enums/categoryName.enum";
import { EventStatus } from "./enums/eventStatus.enum";
import { EventType } from "./enums/eventType.enum";

export interface Event {
    id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
    eventType: EventType;
    status: EventStatus;
    category: CategoryName;
    image?: string;
}
