import { Injectable } from "@nestjs/common";
import { Chat } from "src/Domain/Model/Chat";
import { Report } from "src/Domain/Model/Report";
import { ReportRepository } from "src/Domain/Repository/ReportRepository";

@Injectable()
export class PrismaReportRepository implements ReportRepository {
    saveChat(chat: Chat, reportId: string): Promise<Report> {
        throw new Error("Method not implemented.");
    }
    save(report: Report): Promise<Report> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Report[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Report | null> {
        throw new Error("Method not implemented.");
    }
    findByUserId(userId: number): Promise<Report[]> {
        throw new Error("Method not implemented.");
    }
    findByTravelId(travelId: string): Promise<Report[]> {
        throw new Error("Method not implemented.");
    }
    update(report: Report): Promise<Report> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteByTravelId(travelId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    exists(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}