export interface Authenticate3D {
    sessionid: string;
    lineacaptura?: string;
    order?: StructUpdateSessionOrder;
    customer?: StructUpdateSessionCustom; 
}

export interface StructUpdateSessionOrder {
    amount: number;
    currency: string;
    reference?: string;
    description?: string;
    id?: string;
}

export interface StructUpdateSessionCustom {
    email: string;
}