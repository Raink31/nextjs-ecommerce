import { formatPrice } from "@/lib/format";

interface PriceTagProps {
    price: number,
    className?: string,
}

export default function PriceTag({price, className} : PriceTagProps) {
    return (
        <span className={`badge ${className} text-base py-4 px-4 bg-primary`}>{formatPrice(price)}</span>
    )
}