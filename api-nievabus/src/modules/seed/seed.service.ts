import { Injectable } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';
import dataClientes from '../seed/data/clientes.json';
import dataUsuarios from '../seed/data/usuarios.json';
import dataAutobuses from '../seed/data/autobuses.json';
import dataEmpleados from '../seed/data/empleados.json';
import dataViajes from '../seed/data/viajes.json';
import { UsuariosService } from '../usuarios/usuarios.service';
import { AutobusesService } from '../autobuses/autobuses.service';
import { EmpleadosService } from '../empleados/empleados.service';
import { ViajesService } from '../viajes/viajes.service';

@Injectable()
export class SeedService {
    constructor(
        private readonly clientesService: ClientesService,
        private readonly usuariosService: UsuariosService,
        private readonly autobusesService: AutobusesService,
        private readonly empleadosService: EmpleadosService,
        private readonly viajesServices: ViajesService
    ){}

    async runData() {
        await this.insertNewClientes();
        await this.insertNewUsuarios();
        await this.insertNewAutobus();
        await this.insertNewEmpleados();
        // await this.insertNewViajes();

        return 'Datos insertados con éxito'
    }

    private async insertNewClientes() {
        await this.clientesService.deleteAllClientes();
        const insertPromises = [];
        dataClientes.forEach((cliente) => {
            insertPromises.push(this.clientesService.create(cliente))
        })
        await Promise.all(insertPromises);
        return true;
    }

    private async insertNewUsuarios() {
        await this.usuariosService.deleteAllUsuarios();
        const insertPromises = [];
        dataUsuarios.forEach((usuario) => {
            insertPromises.push(this.usuariosService.create(usuario))
        })
        await Promise.all(insertPromises);
        return true;
    }

    private async insertNewAutobus() {
        await this.autobusesService.deleteAllAutobuses();
        const insertPromises = [];
        dataAutobuses.forEach((autobus) => {
            insertPromises.push(this.autobusesService.create(autobus))
        })
        await Promise.all(insertPromises);
        return true;
    }

    private async insertNewEmpleados() {
        await this.empleadosService.deleteAllEmpleados();
        const insertPromises = [];
        dataEmpleados.forEach((empleado) => {
            insertPromises.push(this.empleadosService.create(empleado))
        })
        await Promise.all(insertPromises);
        return true;
    }

    // private async insertNewViajes() {
    //     await this.viajesServices.deleteAllViajes();
    //     const insertPromises = [];
    //     dataViajes.forEach((viaje) => {
    //         insertPromises.push(this.viajesServices.create(viaje))
    //     })
    //     await Promise.all(insertPromises);
    //     return true;
    // }
}
