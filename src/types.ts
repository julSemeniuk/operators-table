export interface Operator {
    createdAt: string;
    name: string;
    avatar: string;
    isWorking: boolean;
    id: string;
}

export interface OperatorAddon {
    fieldName: string;
    text: string;
    isChecked: boolean;
    id: string;
}
