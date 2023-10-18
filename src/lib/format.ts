export function formatPrice(price: number) {
    return (price/100).toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
    })
}