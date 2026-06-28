import { Message } from "./Message";
import { User } from "./User";

export class Chat{
    private chatId : string;
    private travelId : string;
    private driverId : string;
    private participants : User[];
    private active : boolean;
    private createdAt : Date;
    private messages : Message[];
}