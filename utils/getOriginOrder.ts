function getOriginOrder(trackingNumber: string) {
    const regex = /([A-Z]+)$/;
    const match = regex.exec(trackingNumber);

    if (match) {
        if (match[1] === 'T' || match[1] === 'Y') {
            return 'ES';
        }
        return match[1];
    }

    return null;
}

export default getOriginOrder;