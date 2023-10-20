import { Cart, Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { cookies } from 'next/dist/client/components/headers'
import { getServerSession} from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export type CartWithProducts = Prisma.CartGetPayload<{
    include: { Items: { include: { product: true} } };
}>;

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
    include :  {product: true};
}>

export type ShoppingCart = CartWithProducts & {
    size: number,
    subtotal: number,
}

export async function getCart(): Promise<ShoppingCart | null> {
    const session = await getServerSession(authOptions);

    let cart:CartWithProducts | null = null;

    if (session) {
        cart = await prisma.cart.findFirst({
            where: {userId: session.user.id},
            include: { Items: { include: {product: true} } },
        });
    } else {
        const localCartId = cookies().get("localCartId")?.value;
        cart = localCartId ? await prisma.cart.findUnique({
            where: {id: localCartId},
            include: { Items: { include: {product: true} } },
        })
        : null;
    }

    if (!cart) {
        return null
    }
    return {
        ...cart,
        size: cart.Items.reduce((acc, item) => acc + item.quantity, 0),
        subtotal: cart.Items.reduce((acc, item) => acc + item.quantity * item.product.price, 0),
    }
}

export async function createCart(): Promise<ShoppingCart> {
    const session = await getServerSession(authOptions);

    let newCart: Cart;

    if (session) {
        newCart = await prisma.cart.create({
            data: {userId: session.user.id}
        })
    } else {
        newCart = await prisma.cart.create({
            data: {}
        });
        cookies().set("localCartId", newCart.id);
    }

    //TODO Note: Needs encryption + secure settings in real production app

    return {
        ...newCart,
        Items: [],
        size: 0,
        subtotal: 0
    };
}