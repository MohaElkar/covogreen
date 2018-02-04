export class RechercheFormEnt {
    public depart: string;
    public destination: string;
    public dateDepart?: Date; // peut être null
    public placeLibre: Boolean;

    constructor(depart?: string, destination?: string, placeLibre?: Boolean, dateDepart?: Date) {
        this.depart = depart;
        this.destination = destination;
        this.dateDepart = dateDepart;
        this.placeLibre = false;
    }
}
