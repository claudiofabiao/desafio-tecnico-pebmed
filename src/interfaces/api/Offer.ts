interface Offer {
    id: number;
    storeId: string;
    title: string;
    description: string;
    caption: string;
    fullPrice: number;
    // Erro ortográfico mantido para garantir a compatibilidade da interface.
    discountAmmount: number;
    discountPercentage: number;
    periodLabel: string;
    period: string;
    discountCouponCode: string | null;
    order: number;
    priority: number;
    gateway: string;
    splittable: boolean;
    installments: number;
    acceptsCoupon: boolean;
}

export default Offer;