import { defineComponent, h } from "vue-demi";
import { Bill } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";
import { BillTypes } from "@persian-tools/persian-tools/build/modules/bill";

interface BillResult {
    // bill amount
    amount: number;
    // bill type
    type: string;
    // bill barcode
    barcode: string;
    // bill validation
    isValid: boolean;
    // Bill id validation
    isValidBillId: boolean;
    // payment id validation
    isValidBillPayment: boolean;
}

export default defineComponent({
    name: "bill",
    mixins: [tag],
    props: {
        bill: {
            type: Object,
            required: true
        }
    },
    computed: {
        getResult(): BillResult {
            return new Bill(this.bill).getResult();
        },
        getAmount(): number {
            return new Bill(this.bill).getAmount();
        },
        getBillType(): BillTypes {
            return new Bill(this.bill).getBillType();
        },
        getBarcode(): string {
            return new Bill(this.bill).getBarcode();
        },
        verificationBill(): boolean {
            return new Bill(this.bill).verificationBill();
        },
        verificationBillId(): boolean {
            return new Bill(this.bill).verificationBillId();
        },
        verificationBillPayment(): boolean {
            return new Bill(this.bill).verificationBillPayment();
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { result: this.getResult, amount: this.getAmount, type: this.getBillType, barcode: this.getBarcode, isBillValid: this.verificationBill, isBillIdValid: this.verificationBillId, isBillPaymentValid: this.verificationBillPayment });
        return h(this.tag, __SLOTS__);
    }
});
