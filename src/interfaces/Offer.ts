interface Offer {
    id: number;
    storeId: string;
    title: string;
    description: string;
    caption: string;
    fullPrice: number;
    discountAmount: number;
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

    // Campos adicionados.
    discountedPrice: number;
    total: number;
    discountedTotal: number;
}

export default Offer;