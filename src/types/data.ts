export interface ICiv {
    id: number;
    title: string;
    icon: string;
    picked: boolean;
}

export interface IPool {
    id: number;
    civs: ICiv[];
}
