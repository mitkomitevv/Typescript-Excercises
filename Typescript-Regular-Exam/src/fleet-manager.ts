import { Driver } from "./models";
import { BaseVehicle, findItemById } from "./vehicle-types";

export class FleetManager {
    private vehicles: BaseVehicle[] = [];
    private drivers: Map<number, Driver[]> = new Map();

    addVehicle(item: BaseVehicle): string {
        this.vehicles.push(item);
        this.drivers.set(item.id, []);
        return `Vehicle "${item.model}" (ID: ${item.id}) has been added.`;
    }

    assignDriver(vehicleId: number, driver: Driver): string {
        if (!this.findVehicle(vehicleId)) {
            return `ERROR: Vehicle with ID ${vehicleId} not found.`;
        }

        this.drivers.get(vehicleId)?.push(driver);
        return `Driver ${driver.name} assigned to vehicle ID ${vehicleId} successfully.`;
    }

    listAllVehicles(): string[] {
        let result: string[] = ["--- List of All Vehicles ---"];
        this.vehicles.forEach(vehicle => {
            result.push(
                `[${vehicle.category}] ${vehicle.model} (${vehicle.engineCC}cc, ${vehicle.getVehicleDetail()}) - Maintenance: ${vehicle.getMaintenanceCost().toFixed(2)}€`)
        })

        result.push("-----------------------------")

        return result;
    }

    findVehicle(vehicleId: number): BaseVehicle | undefined {
        return findItemById(this.vehicles, vehicleId);
    }
}