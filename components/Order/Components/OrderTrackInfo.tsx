import getOriginOrder from "@/utils/getOriginOrder";

export default function OrderTrackInfo({ trackingId }: { readonly trackingId: string }) {
    const originCountry = getOriginOrder(trackingId);

    const getFlagEmoji = (countryCode: string | null): string => {
        if (countryCode === null || countryCode === 'T') return '';
        const upperCaseCountryCode = countryCode.toUpperCase();
        const firstChar = String?.fromCodePoint(upperCaseCountryCode.charCodeAt(0) + 127397);
        const secondChar = String?.fromCodePoint(upperCaseCountryCode.charCodeAt(1) + 127397);
        return firstChar + secondChar;
    };

    return (
        <div className="">
            <h3 className="text-2xl font-semibold mb-2">Track Info</h3>
            <p>Order ID: {trackingId}</p>
            <p>Origin: {getFlagEmoji(originCountry)}</p>
        </div>
    )
}