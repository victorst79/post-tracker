function getOriginOrder(trackingNumber: string) {
    const regex = /([A-Z]+)$/;
    const match = regex.exec(trackingNumber);

    if (match) {
        return match[1];
    }

    return null;
}

export default getOriginOrder;