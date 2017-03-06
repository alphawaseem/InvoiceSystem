export interface Invoice {
    id: number,
    customer_id: number,
    discount: number,
    total: number
}
export interface InvoiceItem {
    id: number,
    product_id: number,
    invoice_id: number,
    quantity: number
}
