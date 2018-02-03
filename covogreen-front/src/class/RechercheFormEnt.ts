export class RechercheFormEnt {
    public depart: string;
    public destination: string;
    public dateDepart?: date; // peut être null

    constructor(depart: string, destination: string, dateDepart?: Date) {
        this.depart = depart;
        this.destination = destination;
        this.dateDepart = dateDepart;
    }
}
