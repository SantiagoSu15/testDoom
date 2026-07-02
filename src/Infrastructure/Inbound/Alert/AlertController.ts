
import { Body, Controller, Get, Inject, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import type { AcceptAlertUseCase } from "src/Application/Ports/In/Alerts/AcceptAlertUseCase";
import { ALERT_PORTS } from "src/Application/Ports/Out/AlertTokens";
import { AlertButtonDTO } from "./AlertDTOS";

@ApiTags('Alert')
@Controller('alerts')
export class AlertController {


    constructor(
        @Inject(ALERT_PORTS.manageAlert)
        private readonly manageAlertUseCase: AcceptAlertUseCase
    ){}


    @Patch('manage/:id')
    manageAlert(@Param('id') id : string,@Body('confirm') confirm : boolean){
        return this.manageAlertUseCase.AcceptAlert(id,confirm);
    }

    @Put('panic-button/:id')
    activePanicButton(@Param('id') userId : number,@Body('alertButtonDTO') dto : AlertButtonDTO){

    }

}