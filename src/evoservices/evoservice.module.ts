/*Paso 1*/import { Module } from '@nestjs/common';
/*Paso 1*/import { EvoServicesGateway } from './evoservice.gateway';

/*Paso 1*/@Module({
    /*Paso 1*/providers: [EvoServicesGateway]
})
/*Paso 1*/export class EvoServicesModule {

}