export class RechercheFormEnt {
    public depart: string;
    public destination: string;
    public date_trajet: Date;
    public place_libre: Boolean;

    constructor(depart?: string, destination?: string, place_libre?: Boolean, date_trajet?: Date) {
        this.depart = depart;
        this.destination = destination;
        this.date_trajet = date_trajet;
        this.place_libre = false;
    }
}
