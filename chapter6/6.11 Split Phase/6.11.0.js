function priceOrder(product, quantity, shippingMethod) {
    // 상품 정보를 이용하여 상품 가격 계산
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;

    // 배송 정보를 이용하여 배송비 계산
    const shippingPerCase = basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;

    const price = basePrice - discount + shippingCost;
    return price;
}
