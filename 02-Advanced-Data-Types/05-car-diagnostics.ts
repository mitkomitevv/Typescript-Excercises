interface DiagnosticBase {
    partName: string;
    runDiagnostics(): string;
}

function monitorCarStatus(
    carBody: { material: string; state: string } & DiagnosticBase,
    tires: { airPressure: number; condition: string } & DiagnosticBase,
    engine: { horsepower: number; oilDensity: number } & DiagnosticBase
) {
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
}
