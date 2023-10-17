import { Promoter } from "./promoter";
import { Thesis } from "./thesis";

export interface Student {
    studentId: number;
    studentName: string;
    studentSurname: string;
    thesis: Thesis;
    promoter: Promoter;
}