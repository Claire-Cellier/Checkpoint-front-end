interface Country {
    id: number;
    name: string;
    code?: string;
    emoji: string;
    continent: Continent;
}

interface Continent {
    id?: number;
    name: string;
}

export type { Country };
